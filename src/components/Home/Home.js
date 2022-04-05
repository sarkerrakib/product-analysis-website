import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='container'>
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

    );
};

export default Home;