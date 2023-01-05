import React from 'react';
import img1 from '../../images/320441534_1678537825934350_5615782831551837726_n.png'
import img2 from '../../images/324336065_1090066882391470_7293488964594130434_n.png'
import img3 from '../../images/education-learning-knowledge-banner-frame.jpg'
const Advantage = () => {
    return (
        <div className='mt-16'>
            <div className='flex justify-center items-center text-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Advantage</h1>
                    <p>lorem iso is so cool that much i have to join its. <br /> that would be never be sold. ever be sold.</p>
                </div>

            </div>
            <div className='flex justify-center'>
                <div className='w-10/12 mt-5 grid grid-cols-3'>
                    <div className='w-80 border rounded-2xl shadow-2xl'>
                        <img src={img1} className='w-full w-64 rounded-2xl' alt="..." />
                        <div className='p-3'>
                            <h1 className='text-2xl font-bold'>Understanding</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        </div>
                    </div>
                    <div className='w-80 border rounded-2xl shadow-2xl'>
                        <img src={img2} className='w-full rounded-2xl w-64' alt="..." />
                        <div className='p-3'>
                            <h1 className='text-2xl font-bold'>Understanding</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        </div>
                    </div>
                    <div className='w-80 border rounded-2xl shadow-2xl'>
                        <img src={img3} className='w-full rounded-2xl w-64' alt="..." />
                        <div className='p-3'>
                            <h1 className='text-2xl font-bold'>Understanding</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;