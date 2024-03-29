import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { addToCart } from '../../Redux/CartSlice';
import Rating from './Rating';
import { Product } from '../../Model';
import { ref, update } from 'firebase/database';
import { DB } from '../../config/firebase';
import { useAppDispatch } from '../../hooks/useDispatch';
import { addFavoutite } from '../../Redux/ProductSlice';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';

interface props {
  product: Product;
}

const ProductCard = ({ product }: props) => {
  const { name, price, img, isFavourite, key, id } = product;

  // redux hooks
  const dispatch = useAppDispatch();
  const { user } = useSelector((state: RootState) => state.user);

  // function to add and remove favpurites from database
  const handleFavourite = async () => {
    const Ref = ref(DB, `/Products/${key}`);

    // check if user is logged In
    if (user) {
      // update the database
      await update(Ref, {
        isFavourite: !isFavourite,
      });

      // update the product object in the global state
      dispatch(addFavoutite(id));

      // alert the confirmation
      if (isFavourite === false) {
        toast.success(`${name} added to favourites`);
      } else {
        toast.success(`${name} removed from favourites`);
      }
      return;
    }

    // show error message if user is not logged in
    toast.error('You must be logged in');
  };

  const style = {
    wrapper:
      'flex flex-col bg-white px-5 py-7 relative rounded-lg shadow  md:shadow-none flex-grow-0',
    addFav: 'text-[#c8161d] absolute right-5 text-3xl cursor-pointer',
    imgWrapper: 'w-[15rem] m-auto',
    img: 'w-full',
    detailsWrapper: 'flex items-end justify-between pt-3',
    name: 'font-bold text-xl pb-2',
    price: 'font-semibold pt-1',
    currencySign: 'text-xs',
    addToCartBtn:
      'bg-yellow text-center h-12 w-12 flex justify-center items-center text-white rounded-full text-2xl hover:cursor-pointer hover:shadow',
  };

  return (
    <section className={style.wrapper}>
      <section onClick={() => handleFavourite()} className={style.addFav}>
        {isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
      </section>

      <section className={style.imgWrapper}>
        <img src={img} alt={name} className={style.img} />
      </section>

      <section className={style.detailsWrapper}>
        <div>
          <h2 className={style.name}>{name}</h2>

          <Rating />

          <p className={style.price}>
            <span className={style.currencySign}>₦</span>
            {price}
          </p>
        </div>
        <span
          onClick={() => dispatch(addToCart(product))}
          className={style.addToCartBtn}
        >
          +
        </span>
      </section>
    </section>
  );
};

export default ProductCard;
