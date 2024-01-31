export type listType = {
  name: string;
  cards: cardType[];
  newCard: boolean;
};

export type cardType = {
  image?: string;
  tags: { color: string }[];
  header: string;
  content?: string;
  users?: { userPic: string }[];
  comments: number;
  likes: number;
  attachments: number;
};
