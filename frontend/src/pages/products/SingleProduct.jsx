import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleProduct = () => {
    const item = useLoaderData();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    // console.log(item)
    // const extractNumber = (timeSr)
    return (
        <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
            <article>
                <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                    <picture className='md:flex justify-center'>
                        <img src={item.thumbnail_image} alt="" className='md:max-w-[90%] w-full md:h-[500px] md:rounded-xl md:mx-auto' />
                    </picture>

                    <div className='px-8'>
                        <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
                        <p className='mt-6'>Discover irresistible flavors that turn every meal into a memorable experience. From bold, exotic tastes to comforting classics, <br /> each bite is a journey of flavor.</p>
                        <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                            <h3 className='text-xl font-semibold ml-2'>Preparation Time</h3>
                            <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-500'>
                                <li className='pl-3'>
                                    <p>
                                        <span>Total:</span> <span> {item?.more?.[0]?.total ? `${item.more[0].total}` : "total time not available"}</span>
                                    </p>
                                </li>
                                <li className='pl-3 mt-3'>
                                    <p>
                                        <span>Preparation:</span> <span> {item?.more?.[0]?.prep_time ? `${item.more[0].prep_time}` : "Prep time not available"}</span>
                                    </p>
                                </li>
                                <li className='pl-3 mt-3'>
                                    <p>
                                        <span>Cooking:</span> <span> {item?.more?.[0]?.cook_time ? `${item.more[0].cook_time}` : "Cook time not available"}</span>
                                    </p>
                                </li>
                            </ul>
                        </article>
                        <div className='mt-5'>
                            <h3 className='text-xl font-semibold ml-2'>Ingredients</h3>
                            <ul className='list-disc marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle'>
                                {
                                    item?.ingredients.map((ingredient, index) => (
                                        <li key={index} className='pl-4 mt-2'>
                                            <span>{ingredient?.name}</span>
                                            <span> {ingredient?.quantity}</span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-xl font-semibold ml-2'>Instructions</h3>
                            <ol className='list-decimal marker:text-blue-500 mt-4 ml-6 text-secondary marker:align-middle leading-loose'>
                                {item?.instructions
                                    ?.split(/\d+\.\s|\n/) // Splits by number followed by dot and space, or newline
                                    .filter(Boolean) // Removes empty entries
                                    .map((instruction, index) => (
                                        <li key={index}>{instruction.trim()}</li>
                                    ))}
                            </ol>
                        </div>

                        <div className='mt-5'>
                            <h3 className='text-xl font-semibold ml-2'>Comments</h3>
                            <div className='space-y-4'>
                                {item?.comments?.map((commentData, index) => (
                                    <div
                                        key={index}
                                        className='bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105'
                                    >
                                        <p className='text-gray-700 font-medium'>"{commentData.user}"</p>
                                        <p className='text-gray-600 mt-2'>"{commentData.comment}"</p>
                                    </div>
                                ))}
                            </div>
                        </div>








                    </div>


                </div>
            </article>

        </section>
    )
}

export default SingleProduct