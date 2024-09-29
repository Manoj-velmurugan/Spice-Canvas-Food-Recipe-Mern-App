import React, { useState, useEffect } from 'react'
import { BsFillSearchHeartFill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';

const Search = () => {
    const searchText = useParams();

    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        if (queryParam) {
            setQuery(queryParam);
        }
    }, [])

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:5000/api/items`, {
                   params: { q: query }
                });
                setResults(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
                } finally {
                    setLoading(false);
                    }
                }
    fetchItems();
    }, [query])

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

  return (
    <div className='px-6 lg:px-12 py-20'>
           <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
           <div className='bg-white md:max-w-3xl mx-auto p-4 rounded-[40px] relative flex items-center'>

           <BsFillSearchHeartFill className='w-5 h-5 mr-2'/>
           <input className='outline-none w-full placeholder:text-[#a2adb0]'name="query" type="search" placeholder='Find Tasty Recipies to Satisfy Your Cravings' id="search" value={query}
                    onChange={handleSearch}  // Controlled input
                    required=""/>
           </div>

           <ul className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
            {
                results && results.map((item) => (
                    <Card item={item} key={item._id}></Card>
                ))
            }
           </ul>
    </div>
  )
}

export default Search



















// import React, { useEffect, useState } from 'react';
// import { BsFillSearchHeartFill } from "react-icons/bs";
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Search = () => {
//     const searchText = useParams();
//     const [query, setQuery] = useState(''); // Start with an empty string
//     const [results, setResults] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const params = new URLSearchParams(window.location.search);
//         const queryParam = params.get('query');
//         if (queryParam) {
//             setQuery(queryParam);
//         }
//     }, [])

//     useEffect(() => {
//         const fetchItems = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get(`http://localhost:5000/api/items`, {
//                     params: { q: query }
//                 });
//                 setResults(response.data);
//             } catch (err) {
//                 setError(err.message || 'Error fetching data');
//             } finally {
//                 setLoading(false);
//             }
//         }
//     }, [query])

//     console.log(results)
   
//     return (
//         <div className='px-6 lg:px-12 py-20'>
//             <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>Search</h1>
//             <div className='bg-white md:max-w-3xl mx-auto p-4 rounded-[40px] relative flex items-center'>
//                 <BsFillSearchHeartFill className='w-5 h-5 mr-2' />
//                 <input
//                     className='outline-none w-full placeholder:text-[#a2adb0]'
//                     name="query"
//                     type="search"
//                     placeholder='Find Tasty Recipes to Satisfy Your Cravings'
//                     id="search"
//                     value={query} // Controlled input value
//                     onChange={handleSearch} // Update query on each keystroke
//                     required
//                 />
//             </div>

//             {loading && <p>Loading...</p>}
//             {error && <p>{error}</p>}
//             {!loading && !error && results.length > 0 && (
//                 <ul>
//                     {
//                         results.map((item) => (
//                             <li key={item._id}>{item.name}</li>
//                         ))
//                     }
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default Search;
