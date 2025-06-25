

import s from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = (props) => {


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
            {props.posts && props.posts.map(post => <Post key={post.id} value={post.message} likesCount={post.likesCount}/>)}
          </div>
        </div>
    );
}

export default MyPosts;