

import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div>
          My post
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <div className={s.posts}>
            <Post value="post 1" likesCount={10}/>
            <Post value="post 2" likesCount={45}/>
          </div>
        </div>
    );
}

export default MyPosts;