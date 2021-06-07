import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/css/Header.css';
import IconUser from '../image/icon-user.png';
import IconCart from '../image/icon-cart.png';

const Header = () => {

    const [userInfo, setUserInfo] = useState('');
    if (sessionStorage.getItem('user')) {
        var user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user);
        var userName = user.user.name;

    } else {
        var userName = '';
        console.log('Chua co user');
    }



    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="px-5 my-4 fs-5 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li>
                            <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/catalog/logo.png" alt="" />
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4 " to="/" >Homepage</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/product" >Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/news" >News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/contact" >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link px-4" to="/admin/dashboard" >Dashboard</Link>
                        </li>
                    </ul>
                    <form className="d-flex ">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-danger" type="submit">Search</button>
                    </form>
                    <ul className='iconUserCart '>
                        <li className="text-center">
                            <Link className="nav-link text-dark" to="/profile">
                                {
                                    userName.slice(0, 7)
                                }
                            </Link>
                            <br />
                        </li>
                        <li >
                            <Link to="/signin" >
                                <img src={IconUser} alt="" />
                            </Link>
                        </li>
                        <li >
                            <img src={IconCart} alt="" />
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header
