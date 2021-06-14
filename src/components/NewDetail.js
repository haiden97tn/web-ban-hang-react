import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import NewApi from '../api/NewApi'

const NewDetail = () => {

    const [news, setNews] = useState({});
    let { id } = useParams()
    useEffect(() => {
        const CallApi = async () => {
            const { data } = await NewApi.get(id);
            setNews(data);
            var content = document.getElementById('content');
            content.innerHTML = data.content;
        }
        CallApi(id)
    }, [id])

    return (
        <div className="container text-center">
            <h2 className="py-lg-5">{news.title}</h2>
            <img src={news.image} />
            <p className="py-lg-5 text-center " id="content" ></p>
        </div>
    )
}

export default NewDetail
