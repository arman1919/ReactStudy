

import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/736x/4b/0d/8a/4b0d8a3809bff41e4f010fc5add5effe.jpg" alt="" />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>

  );
}

export default Post;