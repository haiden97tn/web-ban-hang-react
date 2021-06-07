import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="row py-5">
                    <div className="col-8">
                        <h2 className="text-5xl font-medium pb-2.5">Get in touch</h2>
                        <p>Please fill out quick form and we will be in touch with lightening speed.</p>
                        <form className="pb-24">
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                                <input type="text" className="form-control" id="title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Message</label>
                                <input type="text" className="form-control" id="message" aria-describedby="emailHelp" />
                                <div id="emailHelp" className="form-text" />
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" id="btnSubmit" className="btn btn-primary">Submit</button>
                        </form>

                    </div>
                    <div className="col-4 text-center">
                        <div className="pb-10">
                            <h2 className="font-bold text-4xl">Connect with us:</h2>
                            <p>For support or any questions</p>
                            <p>Email us at support@gmail.com</p>
                        </div>
                        <div className="pb-10">
                            <h2 className="font-bold text-4xl">Pixpe VietNam</h2>
                            <p>FPT Polytechnic Unnivercity</p>
                            <p>1 Trinh Van Bo Road, Ha Noi</p>
                        </div>
                        <div className="pb-10">
                            <h2 className="font-bold text-4xl">Pixpe USA</h2>
                            <p>VinSchool Univercity</p>
                            <p>30 Hai Ba Trung Road, Ha Noi</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="mt-52 container mx-auto">
                <div className="pb-8 container">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044335!2d105.74459841493271!3d21.038127785993257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1614240174380!5m2!1svi!2s" width="100%" height={800} style={{ border: 0 }} allowFullScreen loading="lazy" />
                </div>
            </div>
            <div className="container-fluid py-5">
                <div>
                    <img className="100%" src="http://erasmusplus.org.ge/files/banner/contact.jpg" alt />
                </div>
            </div>
        </div>

    )
}

export default Contact
