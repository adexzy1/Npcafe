import { AiTwotoneStar } from 'react-icons/ai';
import { addToCart } from '../Redux/CartReducer';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {
  const { name, price, rating, img } = product;
  const dispatch = useDispatch();

  return (
    <section className="bg-white px-5 py-7 rounded-lg hover:shadow">
      <section className="w-[15rem] h-[15rem] m-auto">
        <img src={img} alt={name} className="w-full" />
      </section>
      <section className="flex items-end justify-between pt-3">
        <div>
          <h2 className="font-bold text-xl pb-2">{name}</h2>
          <div className="flex text-yellow">
            {rating.map((rating, index) => (
              <AiTwotoneStar key={index} />
            ))}
          </div>
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
