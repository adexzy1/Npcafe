import { useState } from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <section className="flex">
      {[...Array(5)].map((star, i) => {
        let ratingValue = i + 1;

        return (
          <label key={i} className="text-[#d1d0d2] text-xl cursor-pointer">
            <input
              type="radio"
              name="rating"
              className="hidden"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <AiTwotoneStar
              className={`${ratingValue <= (hover || rating) && 'text-yellow'}`}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </section>
  );
};

export default Rating;
