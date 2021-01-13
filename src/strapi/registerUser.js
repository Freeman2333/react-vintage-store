import axios from "axios";
import url from "../utils/URL";
import { UserContext } from './../context/user';
import { useContext } from 'react';
// async function registerUser({ email, password, username }) {
//   const response = await axios
//     .post(`${url}/auth/local/register`, {
//       username,
//       email,
//       password
//     })
//     .catch(error => console.log(error));
//   return response;
// }

// export default registerUser;

const registerUser = async ({ email, password, username,setLoginErrors }) => {
  const response = await axios.post(`${url}/auth/local/register`, {
    username,email,password
  }).catch(err => setLoginErrors(err.response.data.message[0].messages[0].message))
  return response
}

export default registerUser
