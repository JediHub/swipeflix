import React from 'react';
import './user-preview.styles.scss';

const UserPreview = (props) =>{
    console.log('user :-       ', props.user)
        const { first_name='',last_name='', email='', avatar='' } = props.user;
        const moviewImage = avatar;
        return (
            <div className='user-preview' >
                <div className='user-image'>
                    <div className='background-image' style={{ backgroundImage: `url(${moviewImage})` }} />
                </div>
                <div className='user-details' >
                    <h1 className='title'>{`${first_name} ${last_name}`}</h1>
                    <h2 className='subtitle'>{email}</h2>
                </div>
            </div>
        );
    }

export default UserPreview;
