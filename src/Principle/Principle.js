import React from 'react';
import pic from '../teacher/shutterstock_editorial_10237899n.jpg'
import './Principle.css'
const Principle = () => {
    return (
        <div className='principle mt-16 flex justify-center items-center'>
            <div className=''>
                <img src={pic} className='sir rounded-full ' alt="..." />
            </div>
            <div>
                <div className='para ml-12'>
                    <p><span className='font-extrabold'>"</span> orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of <span className='font-extrabold'>"</span> 
                       
                    </p>
                </div>
                <span className='text-2xl font-extrabold ml-12'>Dr. Adarsh Babu</span>
                <small className='ml-2 font-bold'>VC Of Campus-sia</small>
            </div>
                
        </div>
    );
};

export default Principle;