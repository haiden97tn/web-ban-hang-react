import React, { useState, useEffect } from 'react';
import './cart.css';
import { Link, Redirect } from 'react-router-dom'
import { useForm } from "react-hook-form";
import CartApi from '../../api/CartApi';
import { useHistory } from "react-router-dom";


const Cart = () => {
    let history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const cart = localStorage.getItem('listcart') ? JSON.parse(localStorage.getItem('listcart')) : [];
    const [listcart, setListcart] = useState(cart);
    const onRemove = (id) => {
        const newCart = listcart.filter(x => {
            return x._id !== id;
        });
        setListcart(newCart);
        localStorage.setItem('listcart', JSON.stringify(newCart))
    }
    var total = 0;
    for (var i = 0; i < listcart.length; i++) {
        total += (listcart[i].count * listcart[i].price)
    }
    const onChangeCout = (e) => {
        var count = e.target.value;
        var id = e.target.dataset.id;
        var newListCart = listcart.filter(x => {
            if (x._id === id) {
                return x.count = count
            }
        })
        localStorage.setItem('listcart', JSON.stringify(listcart))
        window.location.reload()
    }

    const onSubmit = (data) => {
        var body = {
            name: data.fullname,
            email: data.email,
            address: data.address,
            products: listcart
        }
        CartApi.add(body);
        alert('Bạn đã đặt hàng thành công')
        localStorage.removeItem('listcart')
        history.push("/");
    }





    return (
        <div>
            <div className="pt-36">
                <h2 className="text-center fs-3 pb-5 pt-5">Tiến hành thanh toán</h2>
                <div className="container">

                    <table id="cart" className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th style={{ width: '10%' }}>Ảnh</th>
                                <th style={{ width: '30%' }}>Tên sản phẩm</th>
                                <th style={{ width: '10%' }}>Giá</th>
                                <th style={{ width: '8%' }}>Số lượng</th>
                                <th style={{ width: '22%' }} className="text-center">Thành tiền</th>
                                <th style={{ width: '10%' }}><button id="delAll" className="btn btn-danger">Delete All</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listcart ? listcart.map((x, index) => {
                                    return <tr key={index} >
                                        <td style={{ width: '10%' }} >
                                            <img className="w-50" src={x.image} />
                                        </td>
                                        <td style={{ width: '30%' }} >{x.name}</td>
                                        <td style={{ width: '10%' }} >{x.price}</td>
                                        <td style={{ width: '8%' }} >
                                            <input
                                                type="number"
                                                defaultValue={x.count}
                                                className="w-50 text-center"
                                                min="1"
                                                max="10"
                                                data-id={x._id}
                                                onChange={(e) => onChangeCout(e)}
                                            />
                                        </td>
                                        <td style={{ width: '8%' }} className="text-primary" >{x.price * x.count}</td>
                                        <td style={{ width: '8%' }} > <i className="bi bi-file-x-fill text-danger fs-2 " onClick={() => onRemove(x._id)} ></i></td>
                                    </tr>

                                }) : <tr><td style={{ width: '100%' }} colSpan="7" className="text-danger fs-2" > Chưa có sản phẩm nào trong giỏ</td></tr>
                            }
                            {
                                <tr>
                                    <td style={{ width: '10%', textAlign: 'left' }} colSpan="4" >
                                        <Link to="/">
                                            <button className="btn btn-warning" >Continue buy</button>
                                        </Link>
                                    </td>
                                    <td className="fw-bold fs-5 text-danger">
                                        TOTAL: $ {total}
                                    </td>
                                    <td colSpan="2"></td>
                                    {/* <td colSpan="2"><button className="btn btn-success " >Payment</button></td> */}
                                </tr>
                            }

                        </tbody>
                        <tfoot>
                        </tfoot>
                    </table>
                    <div className=" w-50 formKhachHang">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h3 className="pb-4">Thông tin khách hàng</h3>
                            <div className="mb-3 w-1/3 ml-96">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-5 " >Fullname </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="fullname"
                                    aria-describedby="emailHelp"
                                    {...register('fullname', { required: true })}
                                />
                                {errors.fullname && <span className="text-danger">Hãy nhập tên bạn</span>}

                            </div>
                            <div className="mb-3 w-1/3 ml-96">
                                <label htmlFor="exampleInputEmail1" className="form-label fs-5">Email </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email" aria-describedby="emailHelp"
                                    {...register('email', { required: true })}

                                />
                                {errors.email && <span className="text-danger">Hãy nhập email</span>}

                            </div>
                            <div className="mb-3 w-1/3 ml-96">
                                <label htmlFor="exampleInputPassword1" className="form-label fs-5">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    {...register('address', { required: true })}

                                />
                                {errors.address && <span className="text-danger">Hãy nhập địa chỉ</span>}

                            </div>
                            <button className="btn btn-success mx-2" type="submit"  >Payment Now</button>
                            <Link to="/signup">
                                <button type="submit" className="btn btn-primary w-1/3 ml-96">Register Account</button>
                            </Link>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Cart
