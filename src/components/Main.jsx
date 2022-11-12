import React from 'react';

const Main = () => {
    return (
        <>
            <div className='flex justify-around py-4 bg-gradient-to-r from-[#00B074] to-[#E3E3E3] '>
                <div className='flex flex-col justify-center'>
                    <h1 className='text-5xl font-bold'>Hey, I am Amrit.</h1>
                    <p className='text-2xl font-bold'>A React Developer</p>
                </div>
                <div>
                    <img src='./images/amrit.jpg' alt='amrit' className='w-96 h-96 rounded-full object-cover' />
                </div>
            </div>
        </>



    )
}

export default Main;