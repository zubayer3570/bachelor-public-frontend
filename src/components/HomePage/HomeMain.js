import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import MealRate from './MealRate';
import axios from 'axios';

const HomeMain = () => {
    const { isLoading, data } = useQuery('fetch-data', () => {
        return axios.get("https://bachelor-public-backend.onrender.com/get-ave-meal-rate")
    })
    return (
        <>
            <div className='flex flex-col items-center justify-center h-[100vh] mt-[-7rem]'>
                <MealRate ave={data?.data.ave} />
                <div className='grid grid-cols-2 mt-8'>
                    <Link to='/expenses'>
                        <div className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Meal Expenses
                        </div>
                    </Link>
                    <Link to='/meal-count'>
                        <div className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Meal Count
                        </div>
                    </Link>
                    <Link to='/other-expenses'>
                        <div className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Other Expenses
                        </div>
                    </Link>
                    <Link to='/accounts'>
                        <div className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Accounts
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeMain;