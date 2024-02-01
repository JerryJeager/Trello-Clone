//image
import rectangle7 from "/images/Photo7.png";
//icons
import combinedDots from "/icons/Combined-Shape.svg";
import addIcon from "/icons/Group-2.svg";
import heart from "/icons/Heart.svg";
import messageSquare from "/icons/message-square-outline.svg";
import attachOutline from "/icons/attach-outline.svg";

//type
import { listType } from "../../types";

const Cards = ({ name, newCard, cards }: listType) => {
  return (
    <div className="w-[90vw]  sm:w-[20rem] lg:w-[22rem]">
      <div className="flex justify-between bg-lightGray p-4 w-full rounded-xl">
        <p>{name}</p>
        <img src={combinedDots} alt="dot-icon" />
      </div>

      {cards.map((card, index) => (
        <div className="bg-lightGray rounded-xl p-4 w-full mt-2" key={index}>
          {card.image && (
            <img src={card.image} className="w-full" alt="card-image" />
          )}
          <div className="flex flex-wrap gap-2 mt-2">
            {card.tags.map((tag, tagIndex) => (
              <div
                key={tagIndex}
                className="w-[50px] h-[6px] rounded-md"
                style={{ backgroundColor: tag.color }}
              ></div>
            ))}
          </div>
          <p className="mt-2">{card.header}</p>
          <p className="opacity-[.4] text-sm">
            {card.content ? card.content : ""}
          </p>

          <div className="flex justify-between items-center mt-2">
            <div className="flex w-fit">
              {card.users &&
                card.users.map((user, index) => (
                  <div key={index}>
                    <img
                      src={user.userPic}
                      className={`w-[30px] `}
                      alt=""
                      style={{
                        transform: `translateX(${index * -50}%)`,
                      }}
                    />
                  </div>
                ))}
              <div
                style={{
                  transform: `translateX(${
                    card.users && card.users.length * -50
                  }%)`,
                }}
              >
                <img src={addIcon} className="w-[30px]" alt="add-icon" />
              </div>
            </div>

            <div className="flex gap-2 opacity-[.4] text-xs lg:text-sm">
              <div className="flex">
                <p>{card.comments}</p>
                <img src={messageSquare} alt="comments-icon" />
              </div>
              <div className="flex">
                <p>{card.likes}</p>
                <img src={heart} alt="like-icon" />
              </div>
              <div className="flex">
                <p>{card.attachments}</p>
                <img src={attachOutline} alt="attachment-icon" />
              </div>
            </div>
          </div>
        </div>
      ))}
      {newCard && (
        <div className="relative">
          <img
            src={rectangle7}
            className="w-full mt-3"
            alt="dotted-rectangle"
          />
          <p className="absolute top-1/2 text-center w-full">+ Add new card</p>
        </div>
      )}
    </div>
  );
};

export default Cards;
