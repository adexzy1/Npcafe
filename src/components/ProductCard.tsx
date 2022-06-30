import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { addToCart } from '../Redux/CartSlice';
import Rating from './Rating';
import { Product } from '../Model';
import { ref, update } from 'firebase/database';
import { DB } from '../config/firebase';
import { useState } from 'react';
import { useAppDispatch } from '../hooks/useDispatch';
import { getProducts } from '../Redux/ProductSlice';

interface props {
  product: Product;
}

const ProductCard = ({ product }: props) => {
  const { name, price, img, isFavourite } = product;

  // state
  const [isFave, setIsFave] = useState<boolean>(false);

  // redux hooks
  const dispatch = useAppDispatch();

  // function to add and remove favpurites from database
  const handleFavourite = async (product: Product) => {
    const Ref = ref(DB, `/Products/${product.key}`);

    let newValue;

    if (isFavourite === false) {
      newValue = true;
    } else {
      newValue = false;
    }

    update(Ref, {
      isFavourite: newValue,
    }).then((res) => {
      console.log(res);
    });
    setIsFave((prev) => !prev);

    dispatch(getProducts);
  };

  return (
    <section className="flex flex-col bg-white px-5 py-7 relative rounded-lg shadow  md:shadow-none flex-grow-0">
      <section
        onClick={() => handleFavourite(product)}
        className="text-[#c8161d] absolute right-5 text-3xl cursor-pointer"
      >
        {isFave || isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </section>

      <section className="w-[15rem] m-auto">
        <img src={img} alt={name} className="w-full" />
      </section>
      <section className="flex items-end justify-between pt-3 ">
        <div>
          <h2 className="font-bold text-xl pb-2">{name}</h2>
          <Rating />
          <p className="font-semibold pt-1">
            <span className="text-xs">₦</span>
            {price}
          </p>
        </div>
        <span
          onClick={() => dispatch(addToCart(product))}
          className="bg-yellow text-center h-12 w-12 flex justify-center items-center text-white rounded-full text-2xl hover:cursor-pointer hover:shadow"
        >
          +
        </span>
      </section>
    </section>
  );
};

export default ProductCard;
