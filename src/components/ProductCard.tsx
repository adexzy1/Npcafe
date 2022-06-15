import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { addToCart } from '../Redux/CartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFavourite } from '../Redux/FavouriteReducer';
import Rating from './Rating';
import { RootState } from '../Redux/store';
import { Product } from '../Model';

interface props {
  product: Product;
}

const ProductCard = ({ product }: props) => {
  const { name, price, img, id } = product;
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);

  const { favouriteItems } = useSelector(
    (state: RootState) => state.favourites
  );
  const [favouriteIDs, setFavouriteIDs] = useState<string[]>([]);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const handleFavourites = () => {
      const exist = favouriteItems.map((x) => {
        return x.id;
      });
      setFavouriteIDs(exist);
    };

    handleFavourites();
  }, [favouriteItems]);

  useEffect(() => {
    const itemIndex = favouriteIDs.findIndex((x) => x === id);
    if (itemIndex >= 0) {
      setFav(true);
    } else {
      setFav(false);
    }
  }, [favouriteIDs, id]);

  const handleFavourite = (product: Product) => {
    setIsFavourite((prev) => !prev);
    dispatch(addFavourite(product));
  };

  return (
    <section className="flex flex-col bg-white px-5 py-7 relative rounded-lg shadow  md:shadow-none flex-grow">
      <section
        onClick={() => handleFavourite(product)}
        className="text-[#c8161d] absolute right-5 text-3xl cursor-pointer"
      >
        {isFavourite || fav ? <AiFillHeart /> : <AiOutlineHeart />}
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
