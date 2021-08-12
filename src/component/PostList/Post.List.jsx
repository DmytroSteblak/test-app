import React from 'react';

import Post from '../Post/Post';

const PostList = ({ posts, title, deletePost }) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, id) =>
                <Post deletePost={deletePost} key={post.id} number={id + 1} post={post} />
            )}
        </div>
    );
};

export default PostList;
