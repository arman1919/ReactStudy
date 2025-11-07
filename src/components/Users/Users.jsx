import axios from 'axios';
import s from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }


    return (
        <div className={s.usersContainer}>
            {                   
                props.users.map( u => <div className={s.users} key={u.id}>
                    <div className={s.usersPhoto}>
                        <img src={u.photos != null && u.photos.small != null ? u.photos.small : "https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg"} alt="" />
                        {
                            u.followed ? 
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    <div className={s.usersInfo}>
                        <div className={s.usersName}>
                            <span>{u.name}</span>
                            <span>{u.status != null ? u.status : "No status"}</span>
                        </div>
                        <div className={s.usersLocation}>
                            <span>{"City"}</span>
                            <span>{"Country"}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;