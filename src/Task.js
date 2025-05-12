
const Welcome = (props) => {
    return (
        <div>
            Hello, {props.name}
        </div>
    )
}

const Button = (props) => {
    return (
        <div>
            <button>{props.name}</button>
        </div>
    )
}

const UserInfo = (props) => {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.city}</span>
        </div>
    )
}


const Box = (props) => {
    return (
        <div style={{border: '1px solid black'}}>
            {props.children}
        </div>
    )
}

const Card = (props) => {
    return (
      <div style={{
        border: '2px solid #4caf50',
        padding: '16px',
        borderRadius: '8px',
        margin: '10px 0',
        backgroundColor: '#f0fff0'
      }}>
        {props.children}
      </div>
    );
  };


const UserList = (props) => {
    const sortedUsers = [...props.users].sort((a, b) => a.age - b.age)

    return (
        <div>
            {sortedUsers.map((user, index) => <div key={index}>{user.name} {user.age} {user.city}</div>)}
        </div>
    )
}

  



function Task() {
    return (
      <div>


        <Card>
            <h2>Привет!</h2>
            <p>Это сообщение внутри карточки.</p>
        </Card>

        <UserList users={[{name: 'Arman', age: 25, city: 'Yerevan'}, {name: 'John', age: 17, city: 'New York'}]}/>

      </div>
    );
  }
  
  export default Task;