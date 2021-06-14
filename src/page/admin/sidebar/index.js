import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="mx-4 sideBarAdmin">
            <ul className="list-group mt-lg-5 pt-4 ">
                <li className="list-group-item"  >
                    <Link className="nav-link" to="/admin/dashboard" > <i class="bi bi-house-door"></i> Dashboard</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/admin/products" ><i class="bi bi-x-diamond"></i> Products</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/admin/categorys" ><i class="bi bi-card-list"></i> Category</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/admin/user" ><i class="bi bi-person-circle"></i> User</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/admin/news" ><i class="bi bi-newspaper"></i> News</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/" ><i class="bi bi-telephone-forward"></i> Contact</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/admin/cart" ><i class="bi bi-cart3"></i> Order</Link>
                </li>
                <li className="list-group-item">
                    <Link className="nav-link" to="/" ><i class="bi bi-arrow-left-circle-fill"></i> Back Home</Link>
                </li>

            </ul>

        </div>
    )
}

export default Sidebar;
