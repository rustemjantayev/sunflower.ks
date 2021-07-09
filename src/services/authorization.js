import api from '../components/reusable/rest';

export async function  login(username, password){
    return await api.post('/login',{"login":username, "password":password})
}

export default login;       