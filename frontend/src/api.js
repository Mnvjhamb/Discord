import axios from 'axios';
import { logout } from './components/shared/utils/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000
});

apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');

    if(userDetails){
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;

}, (error) => {
    return Promise.reject(error);
})

// public routes

export const login = async(data)=>{

    try{

        return await apiClient.post('/auth/login', data);

    } catch(e){

        return {
            error: true,
            exception: e
        }

    }

}

export const register = async(data)=>{

    try{

        return await apiClient.post('/auth/register', data);

    } catch(e){
        return {
            error: true,
            exception: e
        }

    }

}

// secure routes

const checkResponseCode = (e)=>{

    const responseCode = e?.response?.status;

    if(responseCode){
        (responseCode == 401 || responseCode == 403 ) && logout();
    }

}