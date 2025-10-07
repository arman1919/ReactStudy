import React, { useContext, useEffect, useState } from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = () => {
  const store = useContext(StoreContext);
  const [profileState, setProfileState] = useState(store.getState().profilePage);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setProfileState(store.getState().profilePage);
    });

    return unsubscribe;
  }, [store]);

  const addPost = () => {
    store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    store.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={profileState.posts}
      newPostText={profileState.newPostText}
    />
  );
};

export default MyPostsContainer;