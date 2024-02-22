import axios from "axios";


const baseApiUrl = 'api'


export const getToDoList = async () => {
    return await request(`${baseApiUrl}/todo/`, 'get');
};

export async function getToDoDetail(id) {
    return await request(`${baseApiUrl}/todo/${id}`, 'get');
}

export const deleteToDo = async (id) => {
    return await request(`${baseApiUrl}/todo/${id}`, 'delete');    
};

export const createToDo = async (content, completed=false) => {
    if (!content) { return false; }

    const payload = {
        content: content,
        completed: completed
    }

    return await request(`${baseApiUrl}/todo/`, 'post', payload);   
};

export const updateToDo = async (id, content, completed) => {
    
    const payload = {
        content: content,
        completed: completed
    }

    return await request(`${baseApiUrl}/todo/${id}`, 'put', payload);    
};

async function request(url, method, data={}){
    const options = {
        url: url,
        method: method,
        data: data
    };
    try {
        const res = await axios(options);
        return res.data;
    }
    catch (e) {
        console.error(e);
    }
}