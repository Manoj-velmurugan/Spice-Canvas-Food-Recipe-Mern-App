import React from 'react'
import { Link } from 'react-router-dom'
import { GiCampCookingPot } from "react-icons/gi";

const Card = ({ item }) => {
    const categoryStyles = {
        Starter: { backgroundColor: "#f0f5c4", color: "#59871f" },
        Breakfast: { backgroundColor: "#efedfa", color: "#3c3a8f" },
        Lunch: { backgroundColor: "#e5f7f3", color: "#1f8787" },
        Desserts: { backgroundColor: "#e8f5fa", color: "#397a9e" },
        Sides: { backgroundColor: "#feefc9", color: "#d16400" },
        Drinks: { backgroundColor: "#e8f5fa", color: "#397a9e" },
        default: { backgroundColor: "#fff", color: "#000" }
    };
    const getCategoryStyle = (category) => {
        return categoryStyles[category] || categoryStyles.default;
    }
    const categoryStyle = getCategoryStyle(item?.category)
    return (
        <div className='container mx-auto flex justify-center md:justify-start'>
            <Link></Link>
        <div className='max-w-sm'>
            <div className='bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg transform hover:scale-105'> {/* Added transform and hover:scale-105 */}
                <img 
                    src={item?.thumbnail_image} 
                    alt="thumbnail_image" 
                    style={{ width: '350px', height: '200px', objectFit: 'cover' }} 
                    className='rounded-t-lg' 
                />
                <div className='py-6 px-5 rounded-lg bg-white'>
                    <Link to={`/items/${item._id}`}>
                        <h1 className='text-gray-700 font-bold text-xl mb-8 hover:text-gray-600 hover:cursor-pointer'>
                            {item?.name}
                        </h1>
                    </Link>
    
                    {/* category and reading times */}
                    <div className='flex justify-between items-center flex-wrap'> 
                        <button 
                            className={`mt-6 py-2 px-4 font-medium rounded-lg shadow-md hover:shadow-lg transition duration-300`}
                            style={{
                                backgroundColor: categoryStyle.backgroundColor,
                                color: categoryStyle.color
                            }}
                        >
                            {item?.category}
                        </button>
    
                        <div className='flex items-center py-2 mt-6'>
                            <GiCampCookingPot />
                            <span className='ml-1'>
                                {item?.more?.[0]?.cook_time ? `${item.more[0].cook_time}` : "Prep time not available"}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Card