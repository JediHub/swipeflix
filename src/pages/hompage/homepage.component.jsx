import React from 'react'
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = ({ users, currentUser, onClickChangeUser }) => {
    return (
        <div className="homepage" >
         <Directory users={users} onClickHandler={onClickChangeUser} />
        </div>
    )
}

export default HomePage;