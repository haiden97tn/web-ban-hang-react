import React, { useEffect, useState } from 'react'
import CartApi from '../../../api/CartApi'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const CartAdmin = () => {
    let history = useHistory();
    const [order, setOrder] = useState([]);
    const [btnCheck, setBtnCheck] = useState(false);

    useEffect(() => {
        const CallApi = async () => {
            const { data } = await CartApi.getAll()
            console.log(data);
            setOrder(data.data)
        }
        CallApi()
    }, [])

    const onRemove = (id) => {

        var result = order.filter(x => {
            return x._id !== id
        })
        setOrder(result)
        CartApi.remove(id)
    }
    const onChecked = (id, e) => {
        console.log(id);
        e.target.innerText = 'Đã xong';
        e.target.className = 'btn btn-secondary'
        console.log(order);
    }

    return (
        <div>
            <div className="mt-28 container-fluid">
                <div className="row">
                    <main>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Quản lý order</h1>
                        </div>
                        <div className="table-responsive" >
                            <div className="row fs-4 text-primary">
                                <div class="col-2">Tên khách hàng</div>
                                <div class="col-2">Địa chỉ</div>
                                <div class="col-4">Tên sản phẩm</div>
                                <div class="col-4 text-center ">Tác vụ</div>
                            </div>
                            <hr />
                            {order.map((x, index) => {
                                return <div className="row py-2" key={index}>
                                    <div className="col-2">{x.name}</div>
                                    <div className="col-2">{x.address}</div>
                                    <div className="col-4">{x.products.map((y, index) => {
                                        return <p key={index} >{y.name}</p>
                                    })}</div>
                                    <div className="col">
                                        <button

                                            className="btn btn-primary "
                                            onClick={(e) => onChecked(x._id, e)}
                                        >Xác nhận</button> </div>
                                    <div className="col">
                                        <Link to={`cartdetail/${x._id}`} >
                                            <button className="btn btn-warning" >Chi tiết</button>
                                        </Link>
                                    </div>
                                    <div className="col"><button onClick={() => onRemove(x._id)} className="btn btn-danger" > Xóa</button> </div>
                                    <hr />
                                </div>
                            })}

                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default CartAdmin
