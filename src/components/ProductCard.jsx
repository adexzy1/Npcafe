import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { addToCart } from '../Redux/CartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addFavourite } from '../Redux/FavouriteReducer';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const { name, price, img } = product;

  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);

  const { favouriteItems } = useSelector((state) => state.favourites);
  const [favouriteIDs, setFavouriteIDs] = useState([]);
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
    const itemIndex = favouriteIDs.findIndex((x) => x === product.id);
    if (itemIndex >= 0) {
      setFav(true);
    } else {
      setFav(false);
    }
  }, [favouriteIDs, product]);

  const handleFavourite = (product) => {
    setIsFavourite((prev) => !prev);
    dispatch(addFavourite(product));
  };

  return (
    <section className="bg-white px-5 py-7 rounded-lg shadow">
      <section
        onClick={() => handleFavourite(product)}
        className="text-[#c8161d] absolute right-10 text-3xl cursor-pointer"
      >
        {isFavourite || fav ? <AiFillHeart /> : <AiOutlineHeart />}
      </section>

      <section className="w-[15rem] h-[15rem] m-auto">
        <img src={img} alt={name} className="w-full" />
      </section>
      <section className="flex items-end justify-between pt-3">
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
          className="bg-yellow text-center h-12 w-12 flex justify-center items-center text-white rounded-full text-2xl"
        >
          +
        </span>
      </section>
    </section>
  );
};

export default ProductCard;
