import { BiSearch } from 'react-icons/bi';

const TopBar = () => {
  return (
    <section className="p-5">
      <h1 className="font-bold text-xl">Today&apos;s Menu 😋</h1>

      <section className="flex items-center justify-center bg-white py-2 px-3 rounded-3xl mt-3">
        <input
          placeholder="Search by food name"
          className="bg-transparent flex-1 ml-1 text-sm outline-none"
        />
        <BiSearch />
      </section>
    </section>
  );
};

export default TopBar;
