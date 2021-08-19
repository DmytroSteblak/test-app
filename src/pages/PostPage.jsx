import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCommentId, getPostId } from '../api';
import { useFetching } from '../component/hooks/useFetching';
import Loader from '../component/UI/Loader/Loader';

const PostPage = () => {
    const params = useParams();
    const [post,setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [getPostById, isLoading, error] = useFetching(async (id) => {
        const response = await getPostId(params.id);
        setPost(response.data);
    })
    const [fetchComment, isComLoading, comError] = useFetching(async (id) => {
        const response = await getCommentId(params.id);
        setComments(response.data);
    })
    useEffect(() =>{
        getPostById(params.id);
        fetchComment(params.id);
    },[]);

    return (
        <div>
            <h1>Вы открыли страницу поста {params.id}</h1>
            {isLoading
                ? <Loader />
                : <div>{post.id} {post.title}</div>
            }
            <h1>
               Коментарии
            </h1>
            {isComLoading
                ? <Loader />
                : <div>
                    {comments.map((com, id) =>
                        <div className="pageComment" key={id}>
                            <h5>{com.email}</h5>
                            <h3>{com.name}</h3>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostPage;
