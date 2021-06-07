import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProductApi from '../../../api/ProductApi';
import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";
import CategoryAPI from '../../../api/CategoryAPI';
import { uploadFile } from '../../../firebase';




const UpdateProductAdmin = (props) => {
    console.log(props.categories);

    let history = useHistory();
    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        async function callAPI() {
            try {
                const { data: product } = await ProductApi.get(id);
                setDetailProduct(product)
                reset(product)
            } catch (error) {
                console.log(error);
            }
        }
        callAPI(id)
    }, []);



    const onSubmit = async (data) => {
        console.log(data);
        const productImage = document.getElementById('product-image').files[0];
        if (productImage != undefined) {
            const urlFile = await uploadFile(productImage.name, productImage);
            console.log(urlFile);
            var body = {
                _id: data._id,
                name: data.name,
                price: data.price,
                status: data.status,
                quantity: data.quantity,
                image: urlFile,
                categoryId: data.categoryId
            }
            props.onEditProduct(body);
            history.push("/admin/products");
        } else {
            props.onEditProduct(data);
            history.push('/admin/products');
        }

    }

    return (
        <div className="container-fluid">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Update product</h1>
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
                                    <option value={detailProduct.status}>{detailProduct.status}</option>
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
                                <br />
                                <img className="pb-3" src={detailProduct.image} width="150" height="100" />
                                <br />
                                <input
                                    type="file"
                                    className="form-control"
                                    {...register('imageNew')}
                                    id="product-image"

                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Category</label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    {...register('categoryId')}
                                >
                                    {/* <option value={detailProduct.categoryId}>{detailProduct.categoryId}</option> */}
                                    {props.categories.map((x, index) => {
                                        if (x._id === detailProduct.categoryId) {
                                            return <option value={x._id}>{x.name}</option>
                                        }
                                    })}
                                    {props.categories.map((x, index) => {
                                        return <option value={x._id}>{x.name}</option>
                                    })}
                                </select>
                            </div>

                            <button type="submit" className="btn btn-primary">Cập nhật</button>
                        </form>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default UpdateProductAdmin
