import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { uploadFile } from './../../../firebase';

const AddCategoryAdmin = (props) => {
    let history = useHistory();

    //upload anh
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        const productImage = document.getElementById('product-image').files[0];
        const urlFile = await uploadFile(productImage.name, productImage);
        console.log(urlFile);
        var body = {
            name: data.name,
            image: urlFile
        }
        props.onAddCategory(body);
        history.push('/admin/categorys')
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row w-75">
                    <main>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Add new Category</h1>
                        </div>
                        <div className="table-responsive"  >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label className="form-label">Name category</label>
                                    <input

                                        type="text"
                                        className="form-control"
                                        {...register('name', { required: true, minLength: 3 })}
                                    />
                                    {errors.name && errors.name.type === "required" && <span className="text-danger" >Không được để trống</span>}
                                    {errors.name && errors.name.type === "minLength" && <span className="text-danger" >Tối thiểu 3 ký tự</span>}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        {...register('image', { required: true })}
                                        id="product-image"
                                    />
                                    {errors.image && <span className="text-danger" >Không được để trống</span>}
                                </div>

                                <button type="submit" className="btn btn-primary">Thêm mới</button>
                            </form>

                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default AddCategoryAdmin
