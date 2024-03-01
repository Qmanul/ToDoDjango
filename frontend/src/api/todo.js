import axios from "axios";


const baseApiUrl = 'api/todo'


export const getToDoList = async () => {
  return await request({url:`${baseApiUrl}/`, method: 'get'});
};

export const  getToDoDetail = async (id) => {
  return await request({url: `${baseApiUrl}/${id}/`, method: 'get'});
}

export const deleteToDo = async (id) => {
  return await request({url: `${baseApiUrl}/${id}/`, method: 'delete'});    
};

export const createToDo = async (content, completed=false) => {
  if (!content) { throw new Error('No content provided') }

  return await request({url: `${baseApiUrl}/`, method: 'post', data: {content: content, completed: completed}});   
};

export const switchToDoCompletion = async (id) => {
  return await request({url: `${baseApiUrl}/${id}/switch-completion/`, method: 'post'})
};

export const updateToDoContent = async (content) => {
  if (!content) { throw new Error('No content provided') }

  return await request({url: `${baseApiUrl}/${id}/update=content/`, method: 'post', data: {content: content }})
};

async function request({url=baseApiUrl, method='get', data={}, params=null}={}){
  const options = {
    url: url,
    method: method,
    params: params,
    data: data
  }

  try {
    return await axios(options);
  }
  catch (e) {
    console.error(e);
  }
}