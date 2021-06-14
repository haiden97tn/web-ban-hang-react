import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/ProductPage.css';

const ProductPage = (props) => {
    const cart = localStorage.getItem('listcart') ? JSON.parse(localStorage.getItem('listcart')) : [];
    const [listCart, setListCart] = useState(cart);
    var checkCart = false;


    const onAddToCart = (product) => {
        // let newListCart = [...listCart, ...[product]];
        let newListCart = [...listCart];

        if (newListCart.length === 0) {
            newListCart.push(product)
            alert("Thêm thành công!!!")

        } else {
            for (var i = 0; i < newListCart.length; i++) {
                if (newListCart[i]._id === product._id) {
                    newListCart[i].count++
                    checkCart = true
                    alert("Thêm thành công!!!")

                }
            }
            if (checkCart === false) {
                newListCart.push(product)
                alert("Thêm thành công!!!")
            }
        }
        setListCart(newListCart);
        localStorage.setItem('listcart', JSON.stringify(newListCart))
    }

    return (
        <div className="container-fluid mt-5 ">
            <div className="row">
                <div className="col-3">
                    <ul className="list-group text-center fs-5">
                        <li className="list-group-item"  ><Link to="/product" className="text-decoration-none"> All </Link> </li>
                        {
                            props.categories.map((x, index) => {
                                return <li className="list-group-item" key={index} >
                                    <Link to={`category / ${x._id} `} className="text-decoration-none">{x.name}</Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="col-9">
                    <div className="row">
                        {props.products.map((x, index) => {
                            return <div className="col-4 p-4 text-center" key={index} >
                                <div className="card">
                                    <Link to={`product / ${x._id} `}>
                                        <img width="200px" height="300px" src={x.image} className="card-img-top border border-light" alt="..." />
                                    </Link>
                                    <div className="card-body" >
                                        <div className="row">
                                            <div className="col-8">
                                                <h5 className="card-title fs-5" style={{ textAlign: 'left' }}>{x.name}</h5>
                                            </div>
                                            <div className="col-4">
                                                <p className="card-text text-danger fw-bold fs-5">$ {x.price}</p>
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <a href="#" className="btn btn-warning w-100" onClick={() => onAddToCart(x)} >Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
