import React from 'react'

const News = (props) => {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h2 className="py-5 mx-5">TIN TỨC</h2>
                        <hr />
                        {
                            props.listNews.map((x, index) => {
                                return <div className="row py-5" key={index}>
                                    <div className="col-3">
                                        <img width="100%" src={x.image} alt="" />
                                    </div>
                                    <div className="col-9">
                                        <h3>{x.title}</h3>
                                        <p>{(x.content).slice(0, 200)} ...</p>
                                    </div>
                                </div>
                            })
                        }


                    </div>
                    <div className="col-3">
                        <h2 className="py-5">XEM NHIỀU</h2>
                        <hr />
                        <div className="row py-4">
                            <div className="col-12">
                                <img width="80%" src="https://www.remoingay.com/uploads/news/news_thumb/20160829140835_58329.jpg" alt="" />
                                <h5>Mặc đầm ôm body thế nào cho thật quyến rũ</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div class="row">
                <div class="col">
                    <img width="100%" src="https://www.vlance.vn/uploads/portfolio/view/f4a5cc5094bafd029e8d3b8f3e24ba08e8e8ffcd1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default News
