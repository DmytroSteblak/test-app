import React from 'react';
import { useEffect, useState } from 'react';

import PostList from './component/PostList/Post.List';
import { getAllPosts } from './api';
import MyInput from './component/UI/MyInput/MyInput';
import PostForm from './component/PostForm/PostForm';
import MySelect from './component/UI/MySelect/MySelect';

import './App.css';

function App() {
    const [posts, setPosts] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const getPosts = async () => {
        const posts = await getAllPosts();
        setPosts(posts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }
    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }
    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])));
    }

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{margin: "15px 0"}} />
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Поиск..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPost}
                    defaultValue={"Сортировка по"}
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' }
                    ]}
                />
            </div>
            {posts.length
                ? <PostList deletePost={deletePost} posts={posts} title={'Список постов'} />
                : <h1>Постов не найдено :(</h1>
            }
        </div>
    );
}

export default App;
