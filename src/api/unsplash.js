import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID xcj3eBMy7NvdE6s1bS4SqcfR7hYeyY1xtmtnP9S934U'
    }
});
