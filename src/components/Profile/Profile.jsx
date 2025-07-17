import s from './Profile.module.css';
import MyPosts from './My_posts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
      <div className={s.profileContainer}>
        <Profileinfo />
        <MyPosts posts={props.profilePage.posts}
                 newPostText={props.profilePage.newPostText}
                 dispatch={props.dispatch}
        />
      </div>
    );
}

export default Profile;