import axios from "axios";

export const getToDoItems = async () => {
    const res = await axios.get('api/todo');
    return res.data;
};