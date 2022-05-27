import React, { FC, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import style from './postFullInfo.module.scss';

import { Button } from 'components/common/button/Button';
import { Loader } from 'components/common/loader/Loader';
import { Modal } from 'components/common/modal/Modal';
import { Title } from 'components/common/title/Title';
import { Comment } from 'components/userInfo/Posts/fullPost/comments/Comment';
import { Post } from 'components/userInfo/Posts/post/Post';
import { selectComments } from 'redux/selectors/selectComments';
import { selectError } from 'redux/selectors/selectError';
import { selectPosts } from 'redux/selectors/selectPosts';
import { selectStatus } from 'redux/selectors/selectStatus';
import { useAppDispatch } from 'redux/store';
import { getCommentsPostTC } from 'redux/thunks/commentTC';

export const PostFullInfo: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useAppDispatch();
  const comments = useSelector(selectComments);
  const posts = useSelector(selectPosts);
  const error = useSelector(selectError);
  const status = useSelector(selectStatus);
  const { id } = useParams();
  const userPost = posts.filter(item => item.id === Number(id));
  const onOpenModalClick = (): void => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    dispatch(getCommentsPostTC(Number(id)));
  }, []);

  if (status === 'loading') {
    return <Loader />;
  }
  return (
    <section className={style.postFullInfo}>
      <div className={style.container}>
        {error && error}

        <div className={style.post}>
          {userPost.map(post => (
            <Post key={post.id} post={post} isAllPosts={false} isShowFullText />
          ))}
        </div>

        <div>
          <Title title="Комментарии" />
          {comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>

        <Modal isOpenModal={isOpenModal} onBlur={setIsOpenModal} id={Number(id)} />

        {!isOpenModal && <Button name="Add Comment" callback={onOpenModalClick} />}
      </div>
    </section>
  );
};
