import React from 'react';
import './header.styles.scss';
import { ReactComponent as Home } from '../../assets/home-black.svg';

const Header = ({ currentUser, onChangeHandler }) => {
    return (
        <div className='header'>
            {currentUser.length > 0 ? <h2>{`Current User:- ${currentUser[0].first_name} ${currentUser[0].last_name} `}</h2> : <h2>Users</h2>}
            <div className='options'>
                <Home className='home-logo' onClick={onChangeHandler} />
            </div>
        </div>
    );
}

export default Header;