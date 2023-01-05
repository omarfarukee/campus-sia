import React from 'react';
import Header from '../Header/Header';
import './Home.css'
const Home = () => {
    return (
        <div className='homes'>
            <Header></Header>
            <div className='flex items-center justify-center text-center pt-52'>
                <div className='text-white w-1/2'>
                    <h1 className='text-6xl font-bold mb-10'>Campus-sia</h1>
                    <h2 className='text-2 mb-8'>em Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galle</h2>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default Home;