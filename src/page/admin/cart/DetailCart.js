import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import CartApi from '../../../api/CartApi';
import { Link } from 'react-router-dom';

const DetailCart = () => {
    let { id } = useParams();
    const [cart, setCart] = useState({})

    useEffect(() => {
        const CallApi = async () => {
            try {
                const { data } = await CartApi.get(id)
                setCart(data)
            } catch (error) {
                console.log(error);
            }
        }
        CallApi()
    }, [id])
    console.log(cart);


    return (
        <div className="mt-28 container-fluid">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Chi tiết order</h1>
                    </div>
                    <div className="table-responsive" >
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Tên khách</th>
                                    <th scope="col">Địa chỉ</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Sản phẩm</th>
                                    <th scope="col">Số lượng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="" >
                                    <th scope="row">{cart.name}</th>
                                    <td>{cart.address}</td>
                                    <td>{cart.email}</td>
                                    <td>{cart.products ? cart.products.map((y, index) => {
                                        return <p key={index}>{y.name}</p>
                                    }) : ''
                                    }</td>
                                    <td>{cart.products ? cart.products.map((z, index) => {
                                        return <p key={index}>{z.count}</p>
                                    }) : ''
                                    }</td>
                                </tr>
                                <tr>
                                    <Link to="/admin/cart">
                                        <div className="col" ><button className="btn btn-info" >Quay lại</button> </div>
                                    </Link>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default DetailCart
