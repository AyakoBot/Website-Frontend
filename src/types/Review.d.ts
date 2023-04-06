export type Review = {
  content: string;
  score: number;
  poster: {
    username: string;
    avatar: string;
    id: string;
  };
};
