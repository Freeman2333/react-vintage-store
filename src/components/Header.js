import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user';
import LoginLink from '../components/LoginLink'
import CartLink from './Cart/CartLink'
import logo from "../assets/logo.svg";

const Header = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
      <header className="header">
        <img src={logo} alt="vintage tech logo" className="logo" />
        <nav>
          <ul>
            <div>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              {user.token && (
                <li>
                  <Link to='/checkout'>checkout</Link>
                </li>
              )}
            </div>
            <div>
              <LoginLink/>
              <CartLink/>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header