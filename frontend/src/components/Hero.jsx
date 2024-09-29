import React from 'react'
import { BsFillSearchHeartFill } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='px-5 xl:px-10 md:w-1/2 mb-10'>
    <h1 className='mt-6 mb-10 text-2xl xl:text-3xl text-center font-bold text-[#2A3342] leading-normal xl:leading-relaxed'>
        Cook Up Your Favorites: Discover, Create and Share <span className='text-orange-500'>Delicious Recipes</span> with Ease!
    </h1>
    <form action="/search" className='bg-white p-4 rounded-[40px] relative flex items-center'>
    <BsFillSearchHeartFill className='w-5 h-5 mr-2'/>
    <input className='outline-none w-full placeholder:text-[#a2adb0]'name="query" type="search" placeholder='Find Tasty Recipies to Satisfy Your Cravings' id="search" required=""/>
    </form>
</div>

  )
}

export default Hero