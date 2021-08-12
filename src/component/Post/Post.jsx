import React from 'react';

import MyButton from '../UI/MyButton/MyButton';

import s from './Post.module.css'

const Post = ({post, number, deletePost}) => {
    return (
        <div className={s.post}>
            <div className={s.post_content}>
                <h2>{number}. {post.title}</h2>
                <div>
                    {post.body}
                </div>
            </div>
            <MyButton onClick={() => deletePost(post)}>Удалить</MyButton>
        </div>
    );
};

export default Post;
