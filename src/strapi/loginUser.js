//login user
import axios from "axios";
import url from "../utils/URL";

// async function loginUser({ email, password }) {
//   const response = await axios
//     .post(`${url}/auth/local`, {
//       identifier: email,
//       password
//     })
//     .catch(error => console.log(error));
//   return response;
// }


const loginUser = async ({ email, password,setLoginErrors }) => {
  const response = await axios.post(`${url}/auth/local`, {
    identifier: email,
    password
  }).catch(err => {
    return setLoginErrors(err.response.data.message[0].messages[0].message)});
  return response
}
export default loginUser;