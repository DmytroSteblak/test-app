import axios from 'axios';

export const getAllPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1');
        return response.data
    } catch (e) {
        console.log(e);
    }
}