import React from 'react';
import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {


  let newPostElement =  React.createRef()

  const addPost = () => {
    props.dispatch({type: "ADD-POST"})

  }
  
  const onPostChange = (e) => {
    let text = newPostElement.current.value;
    props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
  }


    return (
        <div className={s.postsBlock}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}></textarea>
            </div>
            <div>
              <button onClick={addPost}>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {props.posts && props.posts.map(post => <Post key={post.id} value={post.message} likesCount={post.likesCount}/>)}
          </div>
        </div>
    );
}

export default MyPosts;