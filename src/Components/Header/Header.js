import React, { useState } from 'react';
import '../Home/Home.css'
import logos from '../../images/pngwing.com.png'
const Header = () => {
    const [navber, setNavber] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 80){
            setNavber(true)
        }
        else{
            setNavber(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        // <div className=''>
            <div className={navber ? 'navbar nav-ber active pl-16 pr-16': 'navbar nav-ber pl-16 mr-16'}>
                <div className="flex-1 text-white">
                <img src={logos} className='w-28' alt="..." /><a className={navber ? "btn btn-ghost normal-case text-3xl text-black font-bold":  "btn btn-ghost normal-case text-3xl text-white font-bold"}>Campus-sia</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className={navber ? 'text-black font-bold' : 'text-white font-bold'}><a className=' mr-2 menu'>Home</a></li>
                        <li className={navber ? 'text-black font-bold' : 'text-white font-bold'}><a className=' mr-2 menu'>Our goal</a></li>
                        <li className={navber ? 'text-black font-bold' : 'text-white font-bold'}><a className=' mr-2 menu'>FAQ</a></li>
                        <li className={navber ? 'text-black font-bold' : 'text-white font-bold'}><a className=' mr-2 menu'>About</a></li>
                        <li className={navber ? 'text-black font-bold' : 'text-white font-bold'}><a className=' mr-2 menu'>contact</a></li>
                    </ul>
                </div>
            </div>
        // </div>
    );
};

export default Header;