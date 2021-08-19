import React from 'react';
import { useHistory } from 'react-router-dom';

import MyButton from '../UI/MyButton/MyButton';

import s from './Post.module.css';

const Post = ({ post, deletePost }) => {
    const router = useHistory();

    return (
        <div className={s.post}>
            <div className={s.post_content}>
                <h2>{post.id}. {post.title}</h2>
                <div>
                    {post.body}
                </div>
            </div>
            <div className={s.post_btn}>
                <MyButton onClick={() => router.push(`/posts/${post.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => deletePost(post)}>Удалить</MyButton>
            </div>
        </div>
    );
};

export default Post;
