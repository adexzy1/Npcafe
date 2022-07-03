import { ChangeEvent, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { IoCloseOutline } from 'react-icons/io5';
import { Product } from '../../Model';
import SuggestionCard from './SuggestionCard';

interface props {
  items: Product[];
  searchedText: string;
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ items, searchedText, setSearchedText }: props) => {
  // state
  const [isActive, setIsActive] = useState<boolean>(false);
  const [suggestion, setsuggestion] = useState<Product[]>([]);

  // handle input value change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

  const clearInput = () => {
    setSearchedText('');
  };

  const HandleBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  return (
    <section className="relative flex items-center justify-center bg-grey py-4 px-3 rounded-3xl mt-3 md:bg-white flex-[0.3] md:min-w-[14rem] md:mt-0">
      <input
        onChange={handleChange}
        placeholder="Search by food name"
        className="bg-transparent flex-1 ml-1 text-sm outline-none"
        value={searchedText}
        onBlur={HandleBlur}
      />

      <div className="text-xl cursor-pointer">
        {searchedText.length !== 0 ? (
          <IoCloseOutline onClick={clearInput} />
        ) : (
          <BiSearch />
        )}
      </div>

      {isActive && (
        <SuggestionCard
          suggestion={suggestion}
          setSearchedText={setSearchedText}
          setIsActive={setIsActive}
        />
      )}
    </section>
  );
};

export default SearchBar;
