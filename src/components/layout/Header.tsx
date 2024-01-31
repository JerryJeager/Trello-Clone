import SearchBar from "../ui/SearchBar";

import logo from "/icons/logo.png";
import trelloMark from "/icons/trello-mark.svg";

import alertCircleOutline from "/icons/alert-circle-outline.svg";
import bellOutline from "/icons/bell-outline.svg";
import plusCircleOutline from "/icons/plus-circle-outline.svg";
import oval from "/images/Oval.svg";
const Header = () => {
  return (
    <header className="px-[5%] py-3 lg:py-4 border-b border-black border-opacity-[0.1] flex justify-between">
      <div className="flex gap-2 items-center">
        <h1 className="hidden lg:block lg:pr-5 right-border border-r-0 lg:border-r">
          <img src={logo} alt="trello-logo" />
        </h1>
        <div className="lg:px-5 right-border border-r-0 lg:border-r flex justify-center items-center gap-2">
          <img src={trelloMark} alt="trello-mark" />
          <p className="hidden lg:block">Boards</p>
        </div>
        <SearchBar />
      </div>
      <div className="flex items-center gap-4 lg:gap-6">
        <button aria-label="add-user" role="button">
          <img src={plusCircleOutline} alt="plus-icon" />
        </button>
        <button aria-label="alerts" role="button">
          <img src={alertCircleOutline} alt="alert-icon" />
        </button>
        <button aria-label="notification" role="button">
          <img src={bellOutline} alt="bell-icon" />
        </button>
        <img src={oval} alt="profile-picture" />
      </div>
    </header>
  );
};

export default Header;
