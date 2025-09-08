import s from './Profile.module.css';
import MyPosts from './My_posts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './My_posts/MyPostsContainer';

const Profile = (props) => {

    return (
      <div className={s.profileContainer}>
        <Profileinfo />
        <MyPostsContainer store={props.store}/>
      </div>
    );
}

export default Profile;