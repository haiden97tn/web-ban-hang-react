import React from 'react';
import { useForm } from "react-hook-form";
import NewApi from '../../../api/NewApi';
import { useHistory } from "react-router-dom";

const AddNew = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    let history = useHistory();

    const onSubmit = (data) => {
        NewApi.add(data);
        alert("Thêm tin tức thành công");
        history.push("/admin/news");
    }

    return (
        <div className="mt-28 container-fluid">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Thêm tin tức mới</h1>
                    </div>
                    <div className="table-responsive" >
                        <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Tiêu đề</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('title', { required: true })}
                                />
                                {errors.title && <span className="text-danger">Hãy chọn tiêu đề</span>}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Link ảnh bìa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('image', { required: true })}
                                />
                                {errors.image && <span className="text-danger">Hãy chọn ảnh bài viết</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nội dung</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('content', { required: true })}
                                />
                                {errors.content && <span className="text-danger">Hãy nhập nội dung</span>}

                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default AddNew
