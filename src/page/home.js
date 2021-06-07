import React from 'react'
import '../page/css/home.css';
import Ao1 from '../image/ao1.png';
import Ao2 from '../image/ao2.jpg';
import { Link } from 'react-router-dom';


const HomePage = (props) => {
    console.log(props.cateMens);
    return (
        <div>

            <div className="w-100">
                <div className="w-100  row slshow">
                    <div className="w-100 p-0   d-lg-block d-sm-none d-none slideshow">
                        <div id="carouselExampleIndicators" className=" carousel slide slideshow1" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                            </div>
                            <div className="w-100  carousel-inner slideshow2">
                                <div className=" w-100  carousel-item active">
                                    <img src="https://i.pinimg.com/originals/4d/89/d1/4d89d151ed0d759f0ffaa479d5f2046e.jpg" className="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://previews.123rf.com/images/goodstudio/goodstudio1909/goodstudio190900067/130218841-banner-template-for-fashion-show-with-top-models-wearing-trendy-seasonal-clothes-walking-along-runwa.jpg" className="d-block w-100 " alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src="https://i.pinimg.com/originals/9c/09/d5/9c09d50fdbd4ad715b1abe5e3d1731d1.jpg" className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-center my-5">TOP CATEGORIES</h2>

            <div className="row category">
                {props.categories.map((x, index) => {
                    return <div key={index} className="col-lg-2 col-md-4 col-sm-12">
                        <Link className="text-decoration-none" to={`category/${x._id}`}>
                            <div className="col-12 mb-4">
                                <p className="text-dark">{x.name}</p>
                                <img src={x.image} width="100%" height="150px" />
                            </div>
                        </Link>
                    </div>
                })}
            </div>

            <h2 className="text-center my-5">WOMAM FASHION</h2>

            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <div className="col-12 my-2 imageWoman">
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/womens-279x389.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                    <div className="col-12 bg-light">
                        <div className="row womanFashion">
                            {
                                props.cateWomans.map((x, index) => {
                                    return <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-2">
                                        <Link className="text-decoration-none" to={`product/${x._id}`}>
                                            <div className="col-12 ">
                                                <img src={x.image} alt="" />
                                                <p className="text-dark">{x.name}</p>
                                            </div>
                                        </Link>
                                    </div>
                                })}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row text-center my-5">
                <div className="col">
                    <button className="btn btn-primary fs-4" >View All</button>
                </div>
            </div>

            <div className="row mx-3">
                <div className="col-6">
                    <div className="col-12">
                        <img src={Ao1} width="100%" height="300px" alt="" />
                    </div>
                </div>
                <div className="col-6">
                    <div className="col-12">
                        <img src={Ao2} width="100%" height="300px" alt="" />
                    </div>
                </div>
            </div>

            <h2 className="text-center my-5">MENS FASHION</h2>

            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                    <div className="col-12 ">
                        <div className="mx-5 row womanFashion">
                            {props.cateMens.map((x, index) => {
                                return <div key={index} className="col-lg-4 col-md-6 col-sm-12 my-2">
                                    <Link className="text-decoration-none" to={`product/${x._id}`}>
                                        <div className="col-12 ">
                                            <img src={x.image} alt="" />
                                            <p className="text-dark">{x.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <div className="col-12 my-2 imageWoman">
                        <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/mens-279x389.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="row text-center my-5">
                <div className="col">
                    <button className="btn btn-primary fs-4" >View All</button>
                </div>
            </div>

            <h2 className="text-center my-5">Featured Products</h2>

            <div className="row text-center navCate">
                <div className="col">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/09-224x224.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/04-224x224.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/10-224x224.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/03-224x224.jpg" alt="" />
                </div>
                <div className="col">
                    <img src="http://opencart.lionode.com/bigmarket/oc012019/oc02/image/cache/catalog/06-224x224.jpg" alt="" />
                </div>
            </div>

            <div className="row text-center my-5">
                <div className="col">
                    <button className="btn btn-primary fs-4" >Load More</button>
                </div>
            </div>

            <div className="row ">
                <div className="col">
                    <img width="100%" src="http://www.alexinternational.ro/wp-content/uploads/2016/02/BANNER-MENS-CLOTHING.jpg" alt="" />
                </div>
            </div>





        </div>
    )
}

export default HomePage
