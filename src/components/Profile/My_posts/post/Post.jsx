

import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src="https://i.pinimg.com/736x/4b/0d/8a/4b0d8a3809bff41e4f010fc5add5effe.jpg" alt="" />
      {props.value}
      <div className={s.likes}>
        <span className={s.likesCount}>like {props.likesCount}</span>
      </div>
    </div>

  );
}

export default Post;