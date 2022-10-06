import React from 'react';
import {Link} from 'react-router-dom'
import OtherExpensesCard from './OtherExpensesCard';
import {useQuery} from 'react-query'
import axios from 'axios'

const OtherExpensesMain = () => {
    const {isLoading, data} = useQuery("fetch-other-expense", ()=>{
        return axios.get('https://bachelor-public-backend.onrender.com/get-other-expenses')
    })
    return (
        <div>
            <p className='font-bold text-2xl text-center pt-8 pb-4'>Other Expense List</p>
            {
                data?.data.map(expense => <OtherExpensesCard expense={expense} key={expense._id} />)
            }
            <div className='flex justify-center mt-8'>
                <Link to='/add-to-other-expenses'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Other Expense +
                    </button>
                </Link>
                <Link to='/'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Go Back To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default OtherExpensesMain;