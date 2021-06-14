import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import NewApi from '../../../api/NewApi';
import { useHistory, useParams } from "react-router-dom";


const UpdateNew = () => {

    let history = useHistory();
    let { id } = useParams()
    const [news, setNews] = useState({})
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        var body = {
            _id: id,
            title: data.title,
            content: data.content,
            image: data.image
        }
        const CallApi = async () => {
            try {
                const { data } = await NewApi.update(id, body)
                console.log(data);
                alert("Cập nhật tin tức thành công");
                history.push("/admin/news");

            } catch (error) {
                alert("Cập nhật thất bại");
                console.log(error);
                return;
            }
        }
        CallApi()

    }
    useEffect(() => {
        const CallApi = async () => {
            const { data } = await NewApi.get(id);
            setNews(data)
            reset(data)
        }
        CallApi(id)
    }, [id]);

    return (
        <div className="mt-28 container-fluid">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Cập nhật tin tức</h1>
                    </div>
                    <div className="table-responsive" >
                        <form className="w-75" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Tiêu đề</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('title', { required: true })}
                                    defaultValue={news.title}
                                />
                                {errors.title && <span className="text-danger">Hãy chọn tiêu đề</span>}

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Link ảnh bìa</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('image', { required: true })}
                                    defaultValue={news.image}

                                />
                                {errors.image && <span className="text-danger">Hãy chọn ảnh bài viết</span>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Nội dung</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register('content', { required: true })}
                                    defaultValue={news.content}

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

export default UpdateNew
