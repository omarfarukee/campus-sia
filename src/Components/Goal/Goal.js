import React from 'react';
import { FaUserClock, FaUserCog, FaUserGraduate } from 'react-icons/fa';
const Goal = () => {
    return (
        <div className='mt-10' id='goal'>
            <div className='flex justify-center items-center text-center'>
                <div>
                    <h1 className='text-3xl font-bold'>Our Goal</h1>
                    <p>lorem iso is so cool that much i have to join its. <br /> that would be never be sold. ever be sold.</p>
                </div>

            </div>
            <div className='flex justify-center'>
                  <div className='gap-8 mt-5 grid grid-cols-3'>

                <div className='w-80 border p-4 rounded-2xl shadow-2xl hover:bg-gray-300'>
                    <FaUserCog className='text-6xl'></FaUserCog>
                    <div>
                        <h1 className='text-2xl font-bold'>Understanding</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                </div>

                <div className='w-80 border p-4 rounded-2xl shadow-2xl hover:bg-orange-100'>
                    <FaUserClock className='text-6xl'></FaUserClock>
                    <div>
                        <h1 className='text-2xl font-bold'>Time management</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                </div>

                <div className='w-80 border p-4 rounded-2xl shadow-2xl hover:bg-rose-200'>
                    <FaUserGraduate className='text-6xl'></FaUserGraduate>
                    <div>
                        <h1 className='text-2xl font-bold'>Path to success</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                </div>

            </div>
            </div>
          
        </div>
    );
};

export default Goal;