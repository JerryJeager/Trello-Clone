import { listType } from "../types";

//photos
import photo1 from "/images/Photo1.png";
import photo2 from "/images/Photo2.png";
import Photo3 from "/images/Photo3.png";
import Photo4 from "/images/Photo4.png";
import Photo5 from "/images/Photo5.png";
import Photo6 from "/images/Photo6.png";

//list 1 user pic images
import user1 from "/images/list1/Oval2.svg";
import user2 from "/images/list1/Oval3.svg";
import user3 from "/images/list1/Oval4.svg";
import user4 from "/images/list1/Oval5.svg";
import user5 from "/images/list1/Oval6.svg";
import user6 from "/images/list1/Oval7.svg";

//list2 user pic images
import user7 from "/images/list2/Oval8.svg";
import user8 from "/images/list2/Oval9.svg";
import user9 from "/images/list2/Oval10.svg";
import user10 from "/images/list2/Oval11.svg";
import user11 from "/images/list2/Oval12.svg";
import user12 from "/images/list2/Oval13.svg";

//list 3 user pic images
import user13 from "/images/list3/Oval14.svg";
import user14 from "/images/list3/Oval15.svg";
import user15 from "/images/list3/Oval16.svg";
import user16 from "/images/list3/Oval17.svg";
import user17 from "/images/list3/Oval18.svg";

//list 4 user pic images
import user18 from "/images/list4/Oval19.svg";
import user19 from "/images/list4/Oval20.svg";
import user20 from "/images/list4/Oval21.svg";
import user21 from "/images/list4/Oval22.svg";
import user22 from "/images/list4/Oval23.svg";
import user23 from "/images/list4/Oval24.svg";
import user24 from "/images/list4/Oval25.svg";
import user25 from "/images/list4/Oval26.svg";
import user26 from "/images/list4/Oval27.svg";
import user27 from "/images/list4/Oval28.svg";
import user28 from "/images/list4/Oval29.svg";
import user29 from "/images/list4/Oval30.svg";
import user30 from "/images/list4/Oval31.svg";

//list 5 user pic images
import user31 from "/images/list5/Oval32.svg";
import user32 from "/images/list5/Oval33.svg";
import user33 from "/images/list5/Oval34.svg";
import user34 from "/images/list5/Oval35.svg";
import user35 from "/images/list5/Oval36.svg";

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
  {
    name: "Prototip",
    newCard: false,
    cards: [
      {
        header: "Home business advertising ideas",
        content:
          "Successful businesses know the importance of building and maintaining good working.",
        tags: [
          { color: "#4339f2" },
          { color: "#ff3838" },
          { color: "#891BE8" },
        ],
        comments: 76,
        likes: 45,
        attachments: 12,
      },
      {
        image: photo2,
        header: "Unmatched toner cartridge quality 20 less than oem price",
        content:
          "Why read motivational sayings? For motivation! You might need a bit, if you can use last year’s list of goals this year because it’s as good as new.",
        tags: [{ color: "#0aaaf4" }, { color: "#f8bd1c" }],
        comments: 76,
        likes: 32,
        attachments: 66,
        users: [{ userPic: user7 }, { userPic: user8 }, { userPic: user9 }],
      },
      {
        image: Photo3,
        header: "How to look up",
        content:
          "Are you considering buying a compatible inkjet cartridge for your printer?",
        tags: [{ color: "#1ad698" }],
        comments: 54,
        likes: 76,
        attachments: 11,
        users: [{ userPic: user10 }, { userPic: user11 }, { userPic: user12 }],
      },
    ],
  },
  {
    name: "Trello",
    newCard: true,
    cards: [
      {
        image: Photo4,
        header: "Types of paper in catalog printing",
        content:
          "Branding is no longer simply about visual appeal (or the cherry in the apple pie example, as given in my earlier article).",
        tags: [
          { color: "#891BE8" },
          { color: "#ff3838" },
          { color: "#0aaaf4" },
        ],
        comments: 34,
        likes: 24,
        attachments: 98,
        users: [{ userPic: user13 }, { userPic: user14 }, { userPic: user15 }],
      },
      {
        header: "There is no competition",
        content:
          "This article is floated online with an aim to help you find the best dvd printing solution.",
        tags: [{ color: "#4339f2" }, { color: "#1ad698" }],
        comments: 23,
        likes: 12,
        attachments: 44,
        users: [{ userPic: user16 }, { userPic: user17 }],
      },
    ],
  },
  {
    name: "Test",
    newCard: false,
    cards: [
      {
        header: "Linux or windows which is it",
        content: "Saving money – is something we would all like.",
        tags: [{ color: "#0AAAF4" }, {color: "#E33233"}],
        comments: 32,
        likes: 87,
        attachments: 31,
        users: [
          { userPic: user18 },
          { userPic: user19 },
          { userPic: user20 },
          { userPic: user21 },
          { userPic: user22 },
        ],
      },
      {
        image: Photo5,
        header: "Be single minded",
        content:
          "Create a list with all possible keywords that fit to your product, service or business field.",
        tags: [
          { color: "#891BE8" },
          { color: "#ff3838" },
          { color: "#0aaaf4" },
        ],
        comments: 24,
        likes: 31,
        attachments: 17,
        users: [{ userPic: user23 }, { userPic: user24 }, { userPic: user25 }],
      },
      {
        header: "Linux or windows which is it",
        content: "Saving money – is something we would all like.",
        tags: [{ color: "#F8BD1C" }],
        comments: 55,
        likes: 23,
        attachments: 19,
        users: [{ userPic: user26 }, { userPic: user27 }, { userPic: user28 }],
      },
      {
        header: "Dna the future of nutrition",
        content:
          "“Why does anyone want a vasectomy reversal?” This is a question I hear any time I tell someone what I do for a living.",
        tags: [{ color: "#4339f2" }, { color: "#1ad698" }],
        comments: 12,
        likes: 33,
        attachments: 66,
        users: [{ userPic: user29 }, { userPic: user30 }],
      },
    ],
  },
  {
    name: "Final",
    newCard: false,
    cards: [
      {
        header: "Home business advertising ideas",
        content:
          "Successful businesses know the importance of building and maintaining good working.",
        tags: [
          { color: "#f8bd1c" },
          { color: "#ff3838" },
          { color: "#891be8" },
        ],
        comments: 87,
        likes: 53,
        attachments: 32,
      },
      {
        header: "Home business advertising ideas",
        content:
          "Successful businesses know the importance of building and maintaining good working.",
        tags: [{ color: "#891be8" }, { color: "#1ad698" }],
        comments: 13,
        likes: 11,
        attachments: 43,
        users: [{ userPic: user31 }, { userPic: user32 }],
      },
      {
        image: Photo6,
        header: "Tips for choosing the perfect gloss for your lips",
        content:
          "With MySpace becoming more popular every day, there is the constant need to be different. There are millions of users.",
        tags: [{ color: "#0aaaf4" }, { color: "#f8bd1c" }],
        comments: 21,
        likes: 23,
        attachments: 12,
        users: [{ userPic: user33 }, { userPic: user34 }, { userPic: user35 }],
      },
    ],
  },
];
