import React from 'react'
import { Link } from 'react-router-dom'

function CategoryItem({name, href, backgroundColor, color}){
    const style={
        backgroundColor: backgroundColor,
        color: color,
        borderColor: color
    }

    return (
        <div>
            <Link to={href} className='rounded-full'>
            <div className='uppercase px-6 py-2 text-center rounded-full' style={style}>{name}</div>
            </Link>
        </div>
    )
}

function CategoryList(){
    return (
        <div className='flex flex-wrap items-center justify-center gap-8'>
            <CategoryItem name="Starter" href="/categories/starter" backgroundColor="#f0f5c4" color="#59871f"></CategoryItem>
            <CategoryItem name="Breakfast" href="/categories/breakfast" backgroundColor="#efedfa" color="#3c3a8f"></CategoryItem>
            <CategoryItem name="Lunch" href="/categories/lunch" backgroundColor="#e5f7f3" color="#1f8787"></CategoryItem>
            <CategoryItem name="Desserts" href="/categories/desserts" backgroundColor="#e8f5fa" color="#397a9e"></CategoryItem>
            <CategoryItem name="Sides" href="/categories/sides" backgroundColor="#feefc9" color="#d16400"></CategoryItem>
            <CategoryItem name="Drinks" href="/categories/drinks" backgroundColor="#e8f5fa" color="#397a9e"></CategoryItem>
           
        </div>
    )
}

const CategoryWrapper = () => {
  return (
    <CategoryList></CategoryList>
  )
}

export default CategoryWrapper