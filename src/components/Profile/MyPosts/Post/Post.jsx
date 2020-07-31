import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/03/1453464632-movies-avatar-still-01.jpg?resize=480:*'/>
            {props.message}
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>

    );
}

export default Post;