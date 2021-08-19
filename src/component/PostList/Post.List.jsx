import React from 'react';

import Post from '../Post/Post';

const PostList = ({ posts, title, deletePost }) => {
    if (!posts.length) {
        return (
            <h1>Постов не найдено :(</h1>
        )
    }

    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, id) =>
                <Post deletePost={deletePost} key={post.id} post={post} />
            )}
        </div>
    );
};

export default PostList;
