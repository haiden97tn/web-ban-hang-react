import React from 'react'
import { Link } from 'react-router-dom'

const ListProducts = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-3">Name</div>
                    <div className="col-2">Image</div>
                    <div className="col-2">Price</div>
                    <div className="col-1">Category</div>
                    <div className="col-1">Status</div>
                    <div className="col-3 pb-3">
                        <Link to="/admin/addproduct" className="btn btn-info" >New product</Link>
                    </div>
                </div>
                <hr />
                {props.products.map((product, index) => {
                    return <div className="row pb-3 pt-3" key={index} >
                        <div className="col-3">{product.name}</div>
                        <div className="col-2 "><img src={product.image} width="100px" className="w-1/3" /></div>
                        <div className="col-2">{product.price}</div>
                        {/* <div className="col-1">{categoryPro.name}</div> */}
                        {
                            props.categories.map((x, index) => {
                                if (x._id == product.categoryId) {
                                    return <div className="col-1" key={index}>{x.name}</div>
                                }
                            })
                        }
                        <div className="col-1">{product.status}</div>
                        <div className="col-3">
                            <Link to={`/admin/updateproduct/${product._id}`} className="btn btn-primary" >Update</Link>
                            <button className="btn btn-danger btn-remove" data-id="{product._id}" onClick={() => props.onRemove(product._id)} >Remove</button>
                        </div>
                    </div>
                })}

            </div>

        </div>
    )
}

export default ListProducts
