import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/hompage/homepage.component';
import Header from './components/header/header.component';
import UserPreview from './components/user-preview/user-preview.component';


const App = () => {

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(
    () => {
      fetch('https://reqres.in/api/users?per_page=12',
        { method: 'GET' })
        .then(res => res.json())
        .then(data => setUsers(data.data))
        .catch(err => console.log('we can show error On page through this saving this err string'));
    }
  )

  const onClickChangeUser = (event) => {
    const userId = event.currentTarget.dataset.id_key;
    console.log('userId ', userId);
    setCurrentUser(userId);
  }

  const resetCurrentUser = () => {
    setCurrentUser(null);
  }

  const currentUserDetail = users.filter(user => user.id == currentUser);

  return (
    <div className='app'>
      <Header onChangeHandler={resetCurrentUser} currentUser={currentUserDetail} />
      {currentUser ? <UserPreview user={currentUserDetail[0] || []} /> : <HomePage onClickChangeUser={onClickChangeUser} users={users} currentUser={currentUser} />}
    </div>
  );
}

export default App;
