import axios from 'axios';

const axiosCall = axios.create({
    baseURL: 'https://kizo.co.il/'
});

export default axiosCall;