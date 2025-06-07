

import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: "Hello", likesCount: 10},
    {id: 2, message: "How are you?", likesCount: 45},
  ]

    return (
        <div className={s.postsBlock}>
          <h3>My post</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div className={s.posts}>
            {postsData.map(post => <Post value={post.message} likesCount={post.likesCount}/>)}
          </div>
        </div>
    );
}

export default MyPosts;