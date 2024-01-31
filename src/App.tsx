import Header from "./components/layout/Header";

import heart from "/icons/Heart.svg";
import hard from "/icons/Hard.svg";
import globe from "/icons/globe-2-outline.svg";

import OvalCopy from "/images/Oval-Copy.svg";
import Oval1 from "/images/Oval1.svg";
import Oval2 from "/images/Oval2.svg";
import Oval3 from "/images/Oval3.svg";
import Oval4 from "/images/Oval4.svg";
import Cards from "./components/ui/ListCards";
import { listData } from "./data/lists";

function App() {
  const userPics: { image: string }[] = [
    { image: Oval1 },
    { image: OvalCopy },
    { image: Oval2 },
    { image: Oval3 },
    { image: Oval4 },
  ];
  return (
    <>
      <Header />
      <main>
        <section className="pl-[5%] mt-4 ">
          <div className="flex justify-between pr-[5%]">
            <div className="flex flex-col lg:flex-row gap-2 lg:gap-[7rem]">
              <h2 className="font-medium lg:text-2xl">Brackets</h2>
              <div className="flex gap-2 lg:gap-3 items-center">
                <button
                  aria-label="like-button"
                  role="button"
                  className="pr-2 py-[.2rem] lg:py-1 right-border"
                >
                  <img src={heart} alt="heart-icon" />
                </button>
                <button
                  aria-label="public"
                  role="button"
                  className=" flex gap-1 items-center justify-center"
                >
                  <img src={globe} alt="globe-icon" />
                  <p className="opacity-[0.1]">Public</p>
                </button>
                <button aria-label="folder" role="button">
                  <img src={hard} alt="folder-icon" />
                </button>
              </div>
            </div>

            <div className="flex gap-2 items-center self-end">
              <div className="flex w-fit">
                {userPics.map((user, index) => (
                  <div key={index}>
                    <img
                      src={user.image}
                      className={`w-[30px] lg:w-[40px]`}
                      alt=""
                      style={{
                        transform: `translateX(${index * -60}%)`,
                      }}
                    />
                  </div>
                ))}
                <div className=" -translate-x-[300%] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-black flex items-center justify-center text-white rounded-full text-[10px] lg:text-[12px]">
                  +44
                </div>
              </div>
              <p className="-ml-16 lg:-ml-10 lg:text-xl">Menu</p>
            </div>
          </div>
        </section>
        <section className="pl-[5%] pb-8 mt-4">
          {listData.map((list, index) => (
            <Cards key={index} {...list} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
