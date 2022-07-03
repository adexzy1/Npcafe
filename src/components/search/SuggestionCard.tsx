import { Product } from '../../Model';

interface Props {
  suggestion: Product[];
  setSearchedText: React.Dispatch<React.SetStateAction<string>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const SuggestionCard = (props: Props) => {
  // destructure props
  const { suggestion, setSearchedText, setIsActive } = props;

  const handleSuggestion = (text: string) => {
    setSearchedText(text);
    setIsActive(false);
  };

  const style = {
    wrapper:
      ' text-black overflow-hidden py-2 overflow-y-scroll absolute bg-white  h-56 w-full shadow rounded-lg top-14 left-0',
    item: 'hover:bg-grey py-3 px-5 text-sm cursor-pointer',
    notAvailable:
      ' flex h-full w-full text-gray-400 justify-center items-center text-sm',
  };

  return (
    <section>
      <section className={style.wrapper}>
        {suggestion.length > 0 && (
          <>
            {suggestion.map((item, index) => (
              <p
                onClick={() => handleSuggestion(item.name)}
                className={style.item}
                key={index}
              >
                {item.name}
              </p>
            ))}
          </>
        )}

        {suggestion.length === 0 && (
          <div className={style.notAvailable}>Item Not Available</div>
        )}
      </section>
    </section>
  );
};

export default SuggestionCard;
