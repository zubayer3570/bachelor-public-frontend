import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import PersonCard from './PersonCard'


const MealCountMain = () => {
    const { isLoading, data } = useQuery('fetch-persons', () => {
        return axios.get("https://bachelor-public-backend.onrender.com/get-person")
    })
    return (
        <>
            <div className='flex justify-center mt-8 mb-[-0.5rem] text-3xl font-bold'>Meal Count</div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 p-8'>
                {
                    data?.data.map(singlePerson => <PersonCard data={singlePerson} key={singlePerson._id} /> )
                }
            </div>

            <div className='flex justify-center'>
                <Link to='/add-person'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Person +
                    </button>
                </Link>
                <Link to='/'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Go Back To Home
                    </button>
                </Link>
            </div>
        </>
    );
};

export default MealCountMain;