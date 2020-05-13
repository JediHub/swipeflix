import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ userDetail, onClickHandler }) => {

    const { id, avatar } = userDetail;
    const imageUrl = avatar;
    return (
        <div
            className={`menu-item`}
            data-id_key={id}
            onClick={onClickHandler} >
            <div className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
        </div>
    )
}

export default MenuItem;