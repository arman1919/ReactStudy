import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

class MyPostsContainer extends React.Component {
  static contextType = StoreContext;

  constructor(props, context) {
    super(props, context);
    this.state = {
      profileState: context.getState().profilePage,
    };
  }

  componentDidMount() {
    this.unsubscribe = this.context.subscribe(() => {
      this.setState({
        profileState: this.context.getState().profilePage,
      });
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }

  addPost = () => {
    this.context.dispatch(addPostActionCreator());
  };

  onPostChange = (text) => {
    this.context.dispatch(updateNewPostTextActionCreator(text));
  };

  render() {
    const { profileState } = this.state;

    return (
      <MyPosts
        updateNewPostText={this.onPostChange}
        addPost={this.addPost}
        posts={profileState.posts}
        newPostText={profileState.newPostText}
      />
    );
  }
}

export default MyPostsContainer;