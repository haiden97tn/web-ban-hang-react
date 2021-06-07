import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import CategoryAPI from '../../../api/CategoryAPI';
import { useHistory } from "react-router-dom";
import firebase from 'firebase/app';
import { uploadFile } from '../../../firebase';



const UpdateCateAdmin = (props) => {
    let history = useHistory();
    // console.log(props.detailCate);
    let { id } = useParams();
    const [detailCate, setDetailCate] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    useEffect(() => {
        async function callAPI() {
            try {
                const { data: category } = await CategoryAPI.get(id);
                setDetailCate(category);
                reset(category)
            } catch (error) {
                console.log(error);
            }
        }
        callAPI(id)
    }, [])
    const onSubmit = async (data) => {
        console.log(data);
        const productImage = document.getElementById('product-image').files[0];
        if (productImage != undefined) {
            const urlFile = await uploadFile(productImage.name, productImage);
            console.log(urlFile);
            var body = {
                _id: data._id,
                name: data.name,
                image: urlFile
            }
            props.onEditCate(body);
            history.push("/admin/categorys");
        } else {
            props.onEditCate(data);
            history.push("/admin/categorys");
        }
    }
    return (
        <div>
            <div className="container pt-28 mt-5">
                <div className="row w-75">
                    <main >
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2">Update Category</h1>
                        </div>
                        <div className="table-responsive">
                            <div id="content2"></div>
                            <table className="table table-striped table-sm">
                                <thead></thead>
                                <tbody id="product-content"></tbody>
                            </table>
                            <div className="table-responsive"  >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-3">
                                        <label className="form-label">Name category</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            defaultValue={detailCate.name}
                                            {...register('name', { required: true, minLength: 3 })}
                                        />
                                        {errors.name && errors.name.type === "required" && <span className="text-danger" >Không được để trống</span>}
                                        {errors.name && errors.name.type === "minLength" && <span className="text-danger" >Tối thiểu 3 ký tự</span>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Image</label>
                                        <br />
                                        <img className="pb-4" src={detailCate.image} width="200px" height="150px" alt="" />
                                        <input
                                            type="file"
                                            className="form-control"
                                            {...register('imageNew')}
                                            id="product-image"
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-primary">Cập nhật</button>
                                </form>

                            </div>

                        </div>
                    </main>
                </div>
            </div>

        </div>
    )
}

export default UpdateCateAdmin
