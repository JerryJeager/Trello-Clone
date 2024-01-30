import { useRef, useState } from "react";
import searchOutline from "/icons/search-outline.svg";
import searchOutline2 from "/icons/search-outline2.svg";
const SearchBar = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSearchBarClicked) {
      setIsSearchBarClicked(false);
    }
  };
  const [isSearchBarClicked, setIsSearchBarClicked] = useState(false);

  return (
    <div
      className={`${
        isSearchBarClicked
          ? "bg-black bg-opacity-40 fixed top-0 left-0 h-screen w-screen lg:w-fit lg:h-fit lg:bg-transparent lg:static"
          : "bg-transparent"
      }`}
    >
      <button
        onClick={() => setIsSearchBarClicked((prev) => !prev)}
        className={`${
          isSearchBarClicked ? "hidden" : "block"
        } block lg:hidden `}
      >
        <img src={searchOutline2} alt="search-buton" />
      </button>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${
          isSearchBarClicked
            ? "block w-fit top-[10%] left-[37%"
            : "hidden lg:block"
        } ml-5 relative`}
      >
        <input
          className="bg-lightGray rounded-3xl py-2 pl-4 pr-10 w-[200px] lg:w-[400px] outline-none"
          type="text"
        />
        <button type="submit" className="absolute top-2 right-5">
          <img src={searchOutline} alt="search-button" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
