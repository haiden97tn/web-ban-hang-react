import React, { useEffect, useState } from 'react';
import './css/DetailProduct.css';
import { useParams } from 'react-router';
import ProductApi from '../api/ProductApi';
import { Link } from 'react-router-dom';

const ProductDetailPage = (props) => {
    console.log(props);
    let { id } = useParams();
    const [detailPro, setDetailPro] = useState({});
    const [relatedPro, setRelatedPro] = useState([]);
    console.log(relatedPro);
    useEffect(() => {
        async function callApi() {
            try {
                const { data } = await ProductApi.get(id)
                setDetailPro(data);
                if (data._id === "605cb5e01555f337c47a2ebb") {
                    setRelatedPro(props.cateMens)
                } if (data._id === "605cb5e01555f337c47a2ebc") {
                    setRelatedPro(props.cateWomans)
                }
            } catch (error) {
                console.log(error);
            }
        }
        callApi(id)
    }, [id]);



    return (
        <div className="container detailProduct">
            <div className="row">
                <div className="col-6">
                    <div className="col-12 image">
                        <img src={detailPro.image} alt="" />
                    </div>
                </div>
                <div className="col-6 info">
                    <h2>{detailPro.name}</h2>
                    <h3>{detailPro.price} USD</h3>
                    <p>Brand: China</p>
                    <p>Product Code: {detailPro._id}</p>
                    <p>Reward poinds: 300</p>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <p>Quantity:</p>
                            <input type="number" value="1" width="50%" /><br /><br />
                            <button className="btn btn-warning" >Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <br />
            <h2>Related products:</h2>
            <br />

            <div class="row">

                {
                    relatedPro == [] ? [] : relatedPro.map((x, index) => {

                        return <div className="col-2 text-center" key={index}>
                            <div className="card" >
                                <img src={x.image} />
                                <div className="card-body">
                                    <p className="card-text">
                                        <Link to={`/product/${x._id}`}>
                                            {x.name}
                                        </Link>
                                    </p>
                                    <p>Price: {x.price} USD</p>
                                </div>
                            </div>
                        </div>

                    })

                }


            </div>
        </div>
    )
}

export default ProductDetailPage
