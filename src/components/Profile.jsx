

import classNames from './Profile.module.css';

const Profile = () => {
    return (
      <div className={classNames.content}>
        <div>
          <img src="https://blog.adobe.com/en/publish/2024/10/14/media_1ca79b205381242c5f8beaaee2f0e1cfb2aa8f324.png?width=750&format=png&optimize=medium" alt="" />
        </div>
        <div>
          Ava + desc
        </div>
        <div>
          My post
          <div>
            New post
          </div>
          <div className={classNames.posts}>
            <div className={classNames.item}>post 1</div>
            <div className={classNames.item}>post 2</div>
          </div>
        </div>
      </div>
    );
}

export default Profile;