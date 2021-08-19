import axios from 'axios';

export const getAllPosts = async (limit = 15, page = 1) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params:{
                    _limit: limit,
                    _page: page
                }
        });
        return response;
}

export const getPostId = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    return response;
}

export const getCommentId = async (id) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    return response;
}