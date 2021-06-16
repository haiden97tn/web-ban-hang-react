import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../components/css/Header.css';
import IconUser from '../image/icon-user.png';

const Header = (props) => {
    console.log(props.countCart);
    var cart = localStorage.getItem('listcart') ? JSON.parse(localStorage.getItem('listcart')) : ''
    const [listCart, setListCart] = useState(cart.length)


    const [userInfo, setUserInfo] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        if (sessionStorage.getItem('user')) {
            var user = JSON.parse(sessionStorage.getItem('user'));
            console.log(user);
            setUserInfo(user.user.name)
            // var userName = user.user.name;
        } else {
            setUserInfo('')
            // var userName = '';
        }
    }, [pathname, isLogin])



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
                                    userInfo
                                }
                            </Link>
                            <br />
                        </li>
                        <li >
                            <Link to="/signin" >
                                <img src={IconUser} className="mx-3" />
                            </Link>
                        </li>
                        {/* <li >
                            <Link to="/cart">
                                <img src={IconCart} alt="" />
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/cart" className="text-dark">
                                <div id="ex4">
                                    <span className="p1 fa-stack fa-2x has-badge" data-count={props.countCart}>
                                        <i className="fa fa-shopping-cart fa-stack-1x xfa-inverse" data-count="4b" />
                                    </span>
                                </div>
                            </Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </div>
    )
}

export default Header
