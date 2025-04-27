import { useState } from 'react';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const addUser = () => {
    const newUser = {
      name,
      age,
      city
    };
    setUsers([...users, newUser]);
    // Очистить инпуты после добавления
    setName('');
    setAge('');
    setCity('');
  };

  return (
    <div className="task-1">
      <div className="user-card">
        <input
          className="user-card-item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="User name"
        />
        <input
          className="user-card-item"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="User age"
        />
        <input
          className="user-card-item"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="User city"
        />
        <div>
          <button className="user-card-button" onClick={addUser}>
            Add user
          </button>
        </div>
      </div>

      <div className="user-card-list">
        {users.map((user, index) => (
          <div key={index} className="user-card-list-item">
            <div className="user-card-list-item-name">{user.name}</div>
            <div className="user-card-list-item-age">{user.age}</div>
            <div className="user-card-list-item-city">{user.city}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
