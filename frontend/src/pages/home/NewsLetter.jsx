import React from 'react'

const NewsLetter = () => {
    return (
        <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
            <h3 className='text-secondary font-semibold text-center text-4xl'>Sign up for my weekly newsletters</h3>
            <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>Savor the Flavor: Join Our Culinary Journey and Receive Delicious Recipes<br />Right to Your Inbox!</p>

            <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4 mb-20'>
                <input className='flex flex-grow px-4 py4 rounded text-gray-900 outline-none placeholder:text-[#989c9d] p-3' type="text" placeholder='Name' />
                <input className='flex flex-grow px-4 py4 rounded text-gray-900 outline-none placeholder:text-[#989c9d] p-3' type="text" placeholder='Email-Address' />
                <button className='mt-2 md:mt-0 md:ml-2 bg-btnColor hover:text-secondary outline-none hover:border hover:border-btnColor hover:bg-[#f9f7f3] text-white shadow-lg rounded px-8 py-2'>Get Started</button>
            </div>
            <hr />
        </div>
    )
}

export default NewsLetter