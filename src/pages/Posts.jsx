import React from 'react';
import { useEffect, useState } from 'react';

import { usePosts } from '../component/hooks/usePosts';
import { useFetching } from '../component/hooks/useFetching';
import { getAllPosts } from '../api';
import { getPageCount } from '../component/utils/pages';
import MyButton from '../component/UI/MyButton/MyButton';
import Modal from '../component/UI/Modal/Modal';
import PostForm from '../component/PostForm/PostForm';
import PostFilter from '../component/PostFilter/PostFilter';
import Loader from '../component/UI/Loader/Loader';
import PostList from '../component/PostList/Post.List';
import Pagination from '../component/UI/Pagination/Pagination';

import '../App.css';

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPost = usePosts(posts, filter.sort, filter.query);


    const [getPosts, isLoading, postError] = useFetching( async () => {
        const response = await getAllPosts(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPage(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        getPosts();
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };
    const deletePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };
    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Создать пост
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </Modal>
            <hr style={{margin: "15px 0"}} />
            <PostFilter setFilter={setFilter} filter={filter} />
            {postError &&
            <h1>Произошла ошибка {postError}</h1>
            }
            {isLoading
                ? <div className="loader"><Loader/></div>
                : <PostList deletePost={deletePost} posts={sortedAndSearchedPost} title={"Список постов"} />
            }
            <Pagination totalPages={totalPage} page={page} changePage={changePage} />
        </div>
    );
}

export default Posts;
