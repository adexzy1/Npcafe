import { MdCancel } from 'react-icons/md';
import { addToCart, reduceItem, removeItem } from '../../Redux/CartSlice';
import { cartItems } from '../../Model';
import { useAppDispatch } from '../../hooks/useDispatch';

interface Props {
  product: cartItems;
}

const CartCard = ({ product }: Props) => {
  const { name, price, img, qty } = product;
  const dispatch = useAppDispatch();

  const style = {
    wrapper:
      'flex bg-white  rounded-lg shadow  mx-5 my-5 overflow-hidden relative',
    container: 'py-3 flex items-center justify-between flex-1 px-2',
    detailsCont: 'flex items-center',
    imgWrapper:
      'w-16 h-16 flex items-center justify-center bg-blue-400 p-1 rounded-md mr-5',
    BtnWrapper: 'flex items-center gap-3',
    Btn: 'bg-yellow px-1 rounded-md text-white cursor-pointer',
    name: 'font-bold pb-3',
    RemoveBtn:
      'px-1 text-white text-xl flex items-center justify-centers bg-yellow cursor-pointer',
    qty: 'font-semibold',
    nairaSign: 'text-yellow text-sm',
    span: 'text-yellow pr-1',
  };

  return (
    <section className={style.wrapper}>
      <div className={style.container}>
        <div className={style.detailsCont}>
          <div className={style.imgWrapper}>
            <img src={img} alt={img} />
          </div>

          <div>
            <p className={style.name}>{name}</p>

            <div className={style.BtnWrapper}>
              <span
                onClick={() => dispatch(addToCart(product))}
                className={style.Btn}
              >
                +
              </span>
              <p className={style.qty}>
                <span className={style.span}>x</span>
                {qty}
              </p>
              <span
                onClick={() => dispatch(reduceItem(product))}
                className={style.Btn}
              >
                -
              </span>
            </div>
          </div>
        </div>

        <div>
          <p className={style.qty}>
            <span className={style.nairaSign}>₦</span>
            {qty * price}
          </p>
        </div>
      </div>

      <section
        onClick={() => dispatch(removeItem(product))}
        className={style.RemoveBtn}
      >
        <MdCancel />
      </section>
    </section>
  );
};

export default CartCard;
