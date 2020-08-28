import React from 'react';

export const Avatar = (props) => {
    return (
        <img className="avatar"
        src={`https://www.gravatar.com/avatar/${props.hash}`}
        alt="avatar"/>
    );
};