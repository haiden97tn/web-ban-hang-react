import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const ListCategory = (props) => {
    return (
        <div>
            <div className="row pb-3 ">
                <div className="col-3">STT</div>
                <div className="col-3">Category name</div>
                <div className="col-3">Image</div>
                <div className="col-3">
                    <Link to='/admin/addcategory' className="btn btn-info" >New Category</Link>
                </div>
            </div>

            {props.categories.map((x, index) => {
                return <div className="row pb-3" key={x._id}>
                    <div className="col-3">{index}</div>
                    <div className="col-3">{x.name}</div>
                    <div className="col-3"><img src={x.image} width="70px" /></div>
                    <div className="col-3">
                        <Link
                            to={`/admin/updatecategory/${x._id}`}
                            className="btn btn-primary"
                        >Update</Link>
                        <button
                            data-id="${category._id}"
                            className="btn btn-danger btn-remove mx-3"
                            onClick={() => props.onRemoveCate(x._id)}
                        >Remove</button>
                    </div>

                </div>
            })}


        </div>
    )
}

export default ListCategory
