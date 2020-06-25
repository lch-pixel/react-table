import axios from 'axios';

export async function getUser() {
  const resposnse = await axios.get("http://jsonplaceholder.typicode.com/users");
  return resposnse.data;
}

export function getUserTitle() {
  return ["id", "name", "username", "email", "phone"];
}