import { MouseEvent, useState } from 'react';

const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState<string | null>('All');
  const options = ['All', 'Pizza', 'Hotdog', 'Tacos', 'Snack', 'Drink'];

  const handleSelectedOption = (e: MouseEvent<HTMLParagraphElement>) => {
    setSelected(e.currentTarget.textContent);
    setIsActive(false);
  };

  return (
    <div className="relative flex items-center ">
      <p>filter</p>
      <p
        id="selecteField"
        onClick={() => setIsActive((prev) => !prev)}
        className="bg-yellow text-white py-1 px-2 w-16 text-sm text-center rounded-lg ml-2"
      >
        {selected}
      </p>

      <section
        className={`absolute top-10 bg-white w-full p-3 text-sm rounded-lg shadow z-10 ${
          isActive ? 'block' : 'hidden'
        }`}
      >
        {options.map((option, index) => (
          <p key={index} onClick={handleSelectedOption} className="text-sm p-1">
            {option}
          </p>
        ))}
      </section>
    </div>
  );
};

export default Filter;
