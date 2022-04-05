import React from 'react';
import './Reviews.css';


const Reviews = () => {
    return (
        <div >
            <h2 className='fs-2 text-center mt-5'>CUSTOMER REVIEWS</h2>
            <div className='container'>
                <div className="d-flex align-items-center py-5 mh-100"> <a className="carousel-control-prev text-decoration-none " href="#mycarousel" role="button" data-bs-slide="prev">
                    <div className="d-flex flex-column justify-content-center me-2 ms-auto left">PREV<span className="fas fa-arrow-left"></span> </div> <span className="sr-only">Previous</span>
                </a>
                    <div className="container">
                        <div id="mycarousel" className="carousel slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#mycarousel" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#mycarousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#mycarousel" data-bs-slide-to="2"></li>
                                <li data-bs-target="#mycarousel" data-bs-slide-to="3"></li>
                                <li data-bs-target="#mycarousel" data-bs-slide-to="4"></li>
                                <li data-bs-target="#mycarousel" data-bs-slide-to="5"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-lg-6 "> <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" className="d-block w-100" alt="..."/> </div>
                                        <div className="col-lg-6 ">
                                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                                <p className="review text-center">"This laptop is unbelievably fast. Between the screen, battery life, and performance, this laptop is head and shoulders better than any competition."</p>
                                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                                    <p className="m-0">Robert Garrison</p>
                                                </div>
                                                <p className="job text-center">Ratings: 5 0f 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-6 "> <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" className="d-block w-100" alt="..."/> </div>
                                        <div className="col-lg-6 ">
                                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                                <p className="review text-center">"Here are the temperature results for the new cool MacBooks compared to the old overheating intel ones. 91 degrees for the old one near the processor, and 74 degrees on the new ones. Both had been running for hours transferring files nonstop. Amazing."</p>
                                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                                    <p className="m-0">Jeffery Kennan</p>
                                                </div>
                                                <p className="job text-center">Ratings: 4.5 0f 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-6 "> <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" className="d-block w-100" alt="..."/> </div>
                                        <div className="col-lg-6 ">
                                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                                <p className="review text-center">"Clarity of the screen and improved speed were offset, for me, with a lack of a USB port, no DVD port, and still no compatibility with some apps that I would use. For me, I ended up having to buy an adapter for other devices which revealed that with the adapter plugged in I could not attach the power cord."</p>
                                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                                    <p className="m-0">Issac Maxwell</p>
                                                </div>
                                                <p className="job text-center">Ratings: 5 0f 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-6 "> <img src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445_960_720.jpg" className="d-block w-100" alt="..."/> </div>
                                        <div className="col-lg-6 ">
                                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                                <p className="review text-center">"This laptop is unbelievably fast. Between the screen, battery life, and performance, this laptop is head and shoulders better than any competition."</p>
                                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                                    <p className="m-0">Joy Smith</p>
                                                </div>
                                                <p className="job text-center">Ratings: 4 0f 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-6 "> <img src="https://cdn.pixabay.com/photo/2022/01/20/17/51/office-desk-6952919_960_720.jpg" className="d-block w-100" alt="..."/> </div>
                                        <div className="col-lg-6 ">
                                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                                <p className="review text-center">"Here are the temperature results for the new cool MacBooks compared to the old overheating intel ones. 91 degrees for the old one near the processor, and 74 degrees on the new ones. Both had been running for hours transferring files nonstop. Amazing."</p>
                                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                                    <p className="m-0">Rio Shark</p>
                                                </div>
                                                <p className="job text-center">Ratings: 5 0f 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-lg-6 "> <img src="https://cdn.pixabay.com/photo/2016/09/24/03/20/man-1690965_960_720.jpg" className="d-block w-100" alt="..."/> </div>
                                        <div className="col-lg-6 ">
                                            <div className=" d-flex flex-column justify-content-center my-5 px-3">
                                                <p className="review text-center">"Clarity of the screen and improved speed were offset, for me, with a lack of a USB port, no DVD port, and still no compatibility with some apps that I would use. For me, I ended up having to buy an adapter for other devices which revealed that with the adapter plugged in I could not attach the power cord."</p>
                                                <div className="name d-flex align-items-center justify-content-center"> <span className="fas fa-minus pe-1"></span>
                                                    <p className="m-0">Steven Smith</p>
                                                </div>
                                                <p className="job text-center">Ratings: 4.5 0f 5</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div> <a className="carousel-control-next text-decoration-none " href="#mycarousel" role="button" data-bs-slide="next">
                        <div className="d-flex flex-column justify-content-center right ms-2 me-auto"> NEXT <span className="fas fa-arrow-right"></span> </div> <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Reviews;