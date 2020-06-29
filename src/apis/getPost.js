import axios from 'axios';

export async function getPost() {
  return await axios.get('http://jsonplaceholder.typicode.com/posts').then( response => { 
    return response.data;
  })
};

export function getPostTitle() {
  return ["userId", "id", "title", "body"];
}