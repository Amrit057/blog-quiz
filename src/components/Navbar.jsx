import React from 'react'
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='flex justify-between px-7 py-5 bg-[#E3E3E3] sticky top-0' >
                <h1 className='text-3xl font-bold relative'>amrit<span className='text-[#00B074]'>.</span></h1>
                <div className='flex items-center gap-x-20 font-extrabold text-xl' >
                    <Link to='/' className='hover:text-green-500'><div>Home</div></Link>
                    <Link to='/blogs' className='hover:text-green-500'><div>Blogs</div></Link>
                    <Link to='/main' className='hover:text-green-500'><div>Quiz</div></Link>
                    
                </div>
                <div className='flex gap-x-4 items-center'>
                    <div className='hover:text-green-500'><BsFacebook/></div>
                    <div className='hover:text-green-500'><BsInstagram/></div>
                    <div className='hover:text-green-500'><BsTwitter/></div>
                    <div className='hover:text-green-500'><BsLinkedin/></div>

                </div>
            </div>


        </>
    )
}

export default Navbar