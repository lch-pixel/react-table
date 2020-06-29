import axios from 'axios';

export async function getUser() {
  return await axios.get('http://jsonplaceholder.typicode.com/users').then( response => { 
    return response.data;
  })
};

export function getUserTitle() {
  return ["id", "name", "username", "email", "phone"];
}