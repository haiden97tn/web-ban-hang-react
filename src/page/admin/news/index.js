import React, { useEffect, useState } from 'react'
import NewApi from '../../../api/NewApi'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const NewsAdmin = () => {
    let location = useLocation();
    const [news, setNews] = useState([])

    useEffect(() => {
        const CallApi = async () => {
            const { data } = await NewApi.getAll();
            setNews(data.data)
        }
        CallApi()
    }, [location])

    const onRemove = (id) => {
        var result = news.filter(x => {
            return x._id !== id
        })
        setNews(result)
        NewApi.remove(id)
    }

    return (
        <div className="mt-28 container-fluid">
            <div className="row">
                <main>
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Quản lý tin tức</h1>
                    </div>
                    <div className="table-responsive" >
                        <div class="row fs-4">
                            <div class="col-2">Ảnh</div>
                            <div class="col-7">Tiêu đề</div>
                            <div class="col-3 text-center">
                                <Link to="addnew">
                                    <button className="btn btn-info">Thêm mới</button>
                                </Link>
                            </div>
                        </div>
                        <hr />
                        {
                            news.map((x, index) => {
                                return <div class="row py-3" key={index} >
                                    <div class="col-2"><img src={x.image} width="100%" /> </div>
                                    <div class="col-7">{x.title}</div>
                                    <div class="col-3">
                                        <Link to={`updatenew/${x._id}`}>
                                            <button className="btn btn-primary mx-4" >Update</button>
                                        </Link>
                                        <button className="btn btn-danger" onClick={() => onRemove(x._id)} >Remove</button>
                                    </div>
                                </div>
                            })
                        }

                    </div>
                </main>
            </div>
        </div>
    )
}

export default NewsAdmin
