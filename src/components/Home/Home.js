import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
            <div>
                <div className='d-flex justify-content-around mt-5 pb-5'>
                    <div className='text'>
                        <h2 className='fs-1 text-primary mb-4'>MSI Raider GE66 Deluxe Edition.</h2>
                        <h3><small>MSI Raider GE66 Deluxe Edition 12UHS Core i9 12th Gen RTX 3080 Ti 16GB Graphics 15.6" UHD Gaming Laptop</small></h3>
                        <p>The MSI Raider GE66 12UHS comes with the latest 12th Gen. Intel Core i9 processor and it provides an unprecedented boost in your multitasking projects and performance-demanding games. It is powered by the Intel Core i9-12900HK (24M Cache, 3.80 GHz, up to 5.00 GHz) and 32GB (16GBx2) 4800MHz DDR5 RAM. It offers the ultimate combination of data transfer interfaces and the widest bandwidth to obtain the unrivaled experience. The MSI Raider GE66 12UHS also comes equipped with a 2TB NVMe PCIe Gen4x4 SSD which helps in unbeatable performance.</p>
                        <h4>Ultimate Play with RTX 3080 Ti 16GB Graphics</h4>
                        <p>The MSI Raider GE66 12UHS has been integrated with NVIDIA GeForce RTX 3080 Ti Laptop GPU 16GB GDDR6 Up to 1505MHz Boost Clock, 150W Maximum Graphics Power with Dynamic Boost. Max. 195W CPU-GPU Power with MSI OverBoost Technology. It is built with Ampere NVIDIA’s 2nd gen RTX architecture to give you the most realistic ray-traced graphics and cutting-edge AI features like NVIDIA DLSS. Plus, Max-Q Technologies unleash the power of AI to make thin, high-performance laptops that are faster and better than ever.</p>
                        <button type="button" className="live btn btn-primary">Live Demo</button>
                    </div>
                    <div>
                        <img src="https://www.startech.com.bd/image/cache/catalog/laptop/msi/raider-ge66-12uhs/raider-ge66-12uhs-01-500x500.jpg" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="container">
                    <h2 className='fs-2 text-center m-5'>CUSTOMER REVIEWS</h2>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="face front-face"> <img src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="" className="profile"/>
                                    <div className="pt-3 text-uppercase name"> Robert Garrison </div>
                                    <div className="designation">Ratings: 5</div>
                                </div>
                                <div className="face back-face"> <span className="fas fa-quote-left"></span>
                                    <div className="testimonial"> I made bacck the purchase price in just 48 hours! Thank you for making it pain less, pleasant. The service was execellent. I will refer everyone I know. </div> <span className="fas fa-quote-right"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="face front-face"> <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" className="profile"/>
                                    <div className="pt-3 text-uppercase name"> Jeffery Kennan </div>
                                    <div className="designation">Full Stack Developer</div>
                                </div>
                                <div className="face back-face"> <span className="fas fa-quote-left"></span>
                                    <div className="testimonial"> Really good, you have saved our business! I made bacck the purchase price in just 48 hours! man, this thing is getting better and better as I learn more about it. </div> <span className="fas fa-quote-right"></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="face front-face"> <img src="https://images.unsplash.com/photo-1614574762522-6ac2fbba2208?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjY2fHxtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" className="profile"/>
                                    <div className="pt-3 text-uppercase name"> Issac Maxwell </div>
                                    <div className="designation">Finance Director</div>
                                </div>
                                <div className="face back-face"> <span className="fas fa-quote-left"></span>
                                    <div className="testimonial"> Account keeper is the most valuable business research we have EVER purchased. Without electrician, we would ahave gone bankrupt by now. </div> <span className="fas fa-quote-right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;