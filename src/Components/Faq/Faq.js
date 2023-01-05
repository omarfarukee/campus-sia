import React from 'react';
import img1 from '../../teacher/200318-Ph2-0466.jpg'
import img2 from '../../teacher/istockphoto-610021016-612x612.jpg'
import img3 from '../../teacher/istockphoto-899355338-612x612.jpg'
import './Faq.css'
const Faq = () => {

    return (
        <div className='mt-16'>
            <div className='flex justify-center items-center text-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Teachers Advice</h1>
                    <p>lorem iso is so cool that much i have to join its. <br /> that would be never be sold. ever be sold.</p>
                </div>
            </div>

                <div className='flex justify-center'>
                    <div className='w-4/5 mt-5 grid grid-cols-3'>
                    <div className='w-80 rounded-2xl'>
                        <img src={img1} className='pic' alt="..." />
                        <div className='pt-10 pl-3 pb-3 pr-3 border shadow-2xl rounded-3xl text-center'>
                            <h1 className='text-2xl font-bold'>Sarla tripati</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        </div>
                    </div>
                    <div className='w-80 rounded-2xl'>
                        <img src={img2} className='pic' alt="..." />
                        <div className='pt-10 pl-3 pb-3 pr-3 text-center border shadow-2xl rounded-3xl'>
                            <h1 className='text-2xl font-bold'>Kapil dev</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        </div>
                    </div>
                    <div className='w-80 rounded-2xl'>
                        <img src={img3} className='pic' alt="..." />
                        <div className=' pt-10 pl-3 pb-3 pr-3 text-center border shadow-2xl rounded-3xl'>
                            <h1 className='text-2xl font-bold'>Shures rehan</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
       
        
    );
};

export default Faq;