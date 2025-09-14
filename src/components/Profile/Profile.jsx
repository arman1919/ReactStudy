import s from './Profile.module.css';
import MyPosts from './My_posts/MyPostsContainer';
import Profileinfo from './Profileinfo/Profileinfo';
import MyPostsContainer from './My_posts/MyPostsContainer';

const Profile = () => {

    return (
      <div className={s.profileContainer}>
        <Profileinfo />
        <MyPostsContainer />
      </div>
    );
}

export default Profile;