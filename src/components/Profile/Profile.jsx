import s from './Profile.module.css';
import MyPosts from './My_posts/MyPosts';
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {

    return (
      <div className={s.profileContainer}>
        <Profileinfo />
        <MyPosts posts={props.profilePage.posts}
                 addPost={props.addPost}
                 newPostText={props.profilePage.newPostText}
                 updateNewPostText={props.updateNewPostText}
        />
      </div>
    );
}

export default Profile;