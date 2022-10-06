import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MealCountCard from './MealCountCard';

const MealCountDetails = () => {
    const { person } = useParams()
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`https://bachelor-public-backend.onrender.com/get-person-data/${person}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div>
            <h1 className='font-bold text-center text-2xl my-6'>Meal Count of <span className='text-green-500'>{person}</span></h1>
            <div className='grid grid-cols-3 font-bold text-xl px-4 lg:px-12 py-2 mx-4 lg:mx-12 my-2 bg-[whitesmoke] rounded'>
                <div className='flex items-center'>
                    <p>Date</p>
                </div>
                <div className='flex items-center'>
                    <p>Meal Count</p>
                </div>
            </div>
            <div>
                {
                    data?.mealCount?.map(singleData => <MealCountCard name={data.name} date={singleData[0]} mealCount={singleData[1]} meal={singleData[2]} index={singleData[0] - 1} key={singleData[0] - 1} />)
                }
            </div>
            <div className='flex justify-center mb-12 mt-8'>
            <Link to='/'>
                <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Go Back To Home
                </button>
            </Link>
            </div>
        </div>
    );
};

export default MealCountDetails;