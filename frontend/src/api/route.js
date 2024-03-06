import axios from 'axios';
const url = 'http://localhost:3000';

export const addUser = async (data)=>{
    try {
        await axios.post(`${url}/user`,data);
    } catch (error) {
        console.log("data fetching error", error);
    }
}