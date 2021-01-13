import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';

const LoginLink = () => {
  const { user, userLogout } = useContext(UserContext)
  if (user.token) {
    return (
      <button className="login-btn" onClick={() => {
        userLogout()
      }}>
        logout
      </button>
    )
  }
  return (
    <Link to="/login">login</Link>
  )
}

export default LoginLink
