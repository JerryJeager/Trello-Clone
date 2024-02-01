import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (!formRef.current?.contains(e.target)) {
        setIsSearchBarClicked(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    }; //cleanup function
  }, [formRef]);

  return (
    <div
      className={`${
        isSearchBarClicked
          ? "bg-black bg-opacity-40 z-30 fixed top-0 left-0 h-screen w-full lg:w-fit lg:h-fit lg:bg-transparent lg:static"
          : "bg-transparent"
      }`}
    >
      <button
        onClick={() => setIsSearchBarClicked((prev) => !prev)}
        className={`${
          isSearchBarClicked ? "invisible " : "visible"
        } block lg:hidden `}
      >
        <img src={searchOutline2} alt="search-buton" />
      </button>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${
          isSearchBarClicked ? "block w-fit top-[10%]" : "hidden lg:block"
        } ml-5 relative`}
      >
        <input
          className="bg-lightGray rounded-3xl py-2 pl-4 pr-10 w-[200px]  lg:w-[500px] outline-none"
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
