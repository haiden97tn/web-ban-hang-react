import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { uploadFile } from './../../../firebase';


const AddProductAdmin = (props) => {
    let history = useHistory();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const productImage = document.getElementById('product-image').files[0];
        const urlFile = await uploadFile(productImage.name, productImage);
        console.log(urlFile);
        var body = {
            name: data.name,
            price: data.price,
            status: data.status,
            quantity: data.quantity,
            image: urlFile,
            categoryId: data.categoryId
        }
        console.log('new: ', body);
        props.onAddProduct(body);
        history.push('/admin/products');
    }

    return (
        <div>
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <main className="w-75">
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">Add new product</h1>
                            </div>
                            <div className="table-responsive"  >
                                <form onSubmit={handleSubmit(onSubmit)} >
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register('name', { required: true })}
                                        />
                                        {errors.name && <span className="text-danger" >Hãy nhập tên </span>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register('price', { required: true })}
                                        />
                                        {errors.price && <span className="text-danger" >Hãy nhập giá </span>}

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Status</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            {...register('status')}
                                        >
                                            <option value="yes">Yes</option>
                                            <option value="no">No</option>
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Quantity</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register('quantity', { required: true })}
                                        />
                                        {errors.quantity && <span className="text-danger" >Hãy nhập số lượng </span>}

                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            {...register('image', { required: true })}
                                            id="product-image"
                                        />
                                        {errors.image && <span className="text-danger" >Hãy chọn ảnh </span>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Category</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            {...register('categoryId')}
                                        >
                                            {/* <option defaultValue>Open this select menu</option> */}
                                            {/* <option value="605c4d0146ff6c3260f1b740">Men</option> */}
                                            {props.categories.map((x, index) => {
                                                return <option value={x._id} key={index} >{x.name}</option>
                                            })}
                                        </select>
                                        {errors.categoryId && <span className="text-danger" >Hãy chọn danh mục </span>}
                                    </div>

                                    <button type="submit" className="btn btn-primary">Thêm mới</button>
                                </form>

                            </div>
                        </main>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AddProductAdmin
