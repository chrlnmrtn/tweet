import React from 'react';

export const Author = (props) => {
    return (
        <span className="author">
            <span className="name">{props.name}</span>
            <span className="handle">{props.handle}</span>
        </span>
    );
};