import axios from 'axios';


let axiosobj = axios.create({
    baseURL:"https://api.github.com/"
});


export default axiosobj;