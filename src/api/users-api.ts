import { instance } from 'api/config';
import { CommentType, ParamsType, PostType, UserType } from 'redux/types';

export const usersAPI = {
  getUsers() {
    return instance.get<UserType[]>('users').then(res => res.data);
  },
  getUser(id: number) {
    return instance.get<UserType>(`users/${id}`).then(res => res.data);
  },
  getUserPosts(id: number) {
    return instance.get<PostType[]>(`users/${id}/posts`).then(res => res.data);
  },
  getCommentsPost(id: number) {
    return instance.get<CommentType[]>(`/posts/${id}/comments`).then(res => res.data);
  },
  addCommentsPost(params: ParamsType) {
    const { id, data } = params;
    return instance.post<ParamsType>(`/posts/${id}/comments`, data).then(res => res.data);
  },
};
