

import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
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
            <Post value="post 1" likesCount={10}/>
            <Post value="post 2" likesCount={45}/>
          </div>
        </div>
    );
}

export default MyPosts;