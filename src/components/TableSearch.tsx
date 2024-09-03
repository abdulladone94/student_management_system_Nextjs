import Image from 'next/image';

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center rounded-full gap-2 text-xs ring-[1.5px] ring-gray-300 px-2">
      <Image src="/search.png" alt="search" width={14} height={14} />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] bg-transparent p-2 outline-none"
      />
    </div>
  );
};

export default TableSearch;
