import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';

const SearchBar = ({ items }) => {
  // state
  const [isActive, setIsActive] = useState(false);
  const [suggestion, setsuggestion] = useState([]);
  const [searchedText, setSearchedText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchedText(value);

    if (value.length > 0) {
      setIsActive(true);
      const matchedText = items.filter((product) => {
        const Regex = new RegExp(`${value}`, 'gi');
        return product.name.match(Regex);
      });
      setsuggestion(matchedText);
    } else {
      setIsActive(false);
    }
  };

  const handleSuggestion = (text) => {
    setSearchedText(text);
    setIsActive(false);
  };

  const clearInput = () => {
    setSearchedText('');
  };

  return (
    <section className="relative flex items-center justify-center bg-grey py-4 px-3 rounded-3xl mt-3 md:bg-white flex-[0.3] md:min-w-[14rem] md:mt-0">
      <input
        onChange={handleChange}
        placeholder="Search by food name"
        className="bg-transparent flex-1 ml-1 text-sm outline-none"
        value={searchedText}
        onBlur={() => {
          setTimeout(() => {
            setIsActive(false);
          }, 100);
        }}
      />

      <div className="text-xl cursor-pointer">
        {searchedText.length !== 0 ? (
          <IoCloseOutline onClick={clearInput} />
        ) : (
          <BiSearch />
        )}
      </div>

      {isActive && (
        <section className=" text-black overflow-hidden py-2 overflow-y-scroll absolute bg-white  h-56 w-full shadow rounded-lg top-14">
          {suggestion.length > 0 && (
            <>
              {suggestion.map((item, index) => (
                <p
                  onClick={() => handleSuggestion(item.name)}
                  className="hover:bg-grey py-3 px-5 text-sm cursor-pointer"
                  key={index}
                >
                  {item.name}
                </p>
              ))}
            </>
          )}

          {suggestion.length === 0 && (
            <div className=" flex h-full w-full text-gray-400 justify-center items-center text-sm">
              Item Not Available
            </div>
          )}
        </section>
      )}
    </section>
  );
};

export default SearchBar;
