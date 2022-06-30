import Filter from './Filter';

interface Props {
  setFilter: React.Dispatch<React.SetStateAction<string | null>>;
  filter: string | null;
}

const Category = ({ setFilter, filter }: Props) => {
  return (
    <section className="px-5 mt-10">
      <section className="flex items-center justify-between">
        <h3 className="font-bold text-lg">Menu Category</h3>

        <Filter filter={filter} setFilter={setFilter} />
      </section>
    </section>
  );
};

export default Category;
