import { useState } from 'react';

const Filter = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState('All');
  const options = ['Pizza', 'Hotdog', 'Tacos', 'Snack', 'Drink'];

  const handleSelectedOption = (e) => {
    setSelected(e.target.textContent);
    setIsActive(false);
  };

  return (
    <div className="relative flex items-center ">
      <p>filter</p>
      <p
        id="selecteField"
        onClick={() => setIsActive((prev) => !prev)}
        className="bg-white py-1 px-2 w-16 text-sm text-center rounded-lg ml-2"
      >
        {selected}
      </p>

      <section
        className={`absolute top-10 bg-white w-full p-3 text-sm rounded-lg shadow  ${
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
