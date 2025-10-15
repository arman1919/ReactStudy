import s from './Users.module.css';

let Users = (props) => {
    return (
        <div className={s.usersContainer}>
            {
                props.users.map( u => <div className={s.users} key={u.id}>
                    <div className={s.usersPhoto}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg" alt="" />
                        {
                            u.followed ? 
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>
                        }
                    </div>
                    <div className={s.usersInfo}>
                        <div className={s.usersName}>
                            <span>{u.name}</span>
                            <span>{u.status}</span>
                        </div>
                        <div className={s.usersLocation}>
                            <span>{u.location.city}</span>
                            <span>{u.location.country}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;