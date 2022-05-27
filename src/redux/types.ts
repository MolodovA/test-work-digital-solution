export type StatusType = 'idle' | 'loading' | 'resolved' | 'rejected';
export type UserType = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export type CommentType = {
  postId: number;
  id: number;
  name: string;
  body: string;
  email: string;
};
export type InitialState = {
  status: StatusType;
  users: UserType[];
  user: UserType;
  posts: PostType[];
  comments: CommentType[];
  error: string;
};

export type DataType = {
  firstName: string;
  email: string;
  body: string;
};
export type ParamsType = {
  data: DataType;
  id: number;
};
