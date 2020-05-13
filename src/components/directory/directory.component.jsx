import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = ({ users=[], onClickHandler}) => {
    
    return (
        <div className="directory-menu">
            {users.map((user) =>
                (<MenuItem key={user.id} userDetail={user} onClickHandler={onClickHandler} />
                )
            )}
        </div>
    );
}

export default Directory;