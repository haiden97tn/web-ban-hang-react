import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './css/ProductPage.css';

const ProductPage = (props) => {
    console.log(props.products);
    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-3">
                    <ul className="list-group text-center fs-5">
                        <li className="list-group-item"  ><Link to="/product" className="text-decoration-none"> All </Link> </li>
                        {
                            props.categories.map((x, index) => {
                                return <li className="list-group-item" key={index} >
                                    <Link to={`category/${x._id}`} className="text-decoration-none">{x.name}</Link>
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
                                    <Link to={`product/${x._id}`}>
                                        <img width="200px" height="300px" src={x.image} className="card-img-top" alt="..." />
                                    </Link>
                                    <div className="card-body" >
                                        <div className="row">
                                            <div className="col-7">
                                                <h5 className="card-title">{x.name}</h5>
                                                <p className="card-text text-primary">{x.price}</p>
                                            </div>
                                            <div className="col-5">
                                                <a href="#" className="btn btn-warning">Add to cart</a>
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
