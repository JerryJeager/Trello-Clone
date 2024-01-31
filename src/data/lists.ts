import { listType } from "../types";

//photos
import photo1 from "/images/Photo1.png";

//list 1 user pic images
import user1 from "/images/list1/Oval2.svg";
import user2 from "/images/list1/Oval3.svg";
import user3 from "/images/list1/Oval4.svg";
import user4 from "/images/list1/Oval5.svg";
import user5 from "/images/list1/Oval6.svg";
import user6 from "/images/list1/Oval7.svg";

export const listData: listType[] = [
  {
    name: "Design",
    newCard: true,
    cards: [
      {
        header:
          "Old fashioned recipe for preventing allergies and chemical sensitivities",
        tags: [{ color: "#f8bd1c" }],
        comments: 34,
        likes: 14,
        attachments: 34,
        users: [{ userPic: user1 }],
      },
      {
        header: "Home business advertising ideas",
        content:
          "Successful businesses know the importance of building and maintaining good working.",
        tags: [
          { color: "#4339f2" },
          { color: "#ff3838" },
          { color: "#891be8" },
          { color: "#1ad698" },
        ],
        comments: 23,
        likes: 12,
        attachments: 43,
        users: [{ userPic: user2 }, { userPic: user3 }],
      },
      {
        image: photo1,
        header: "Cosmetic surgery abroad making the right choice",
        tags: [{ color: "#0aaaf4" }],
        comments: 54,
        likes: 16,
        attachments: 13,
        users: [{ userPic: user4 }, { userPic: user5 }, { userPic: user6 }],
      },
    ],
  },
];
