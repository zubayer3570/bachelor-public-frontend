import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddToMeal = () => {
    const { name } = useParams()
    const navigate = useNavigate()
    const submit = async (e) => {
        e.preventDefault()
        const amount = e.target.amount.value
        await axios.post(`https://bachelor-public-backend.onrender.com/add-to-meal/${name}`, { amount }).then(res => navigate(`/account-details/${name}`))
    }
    return (
        <form onSubmit={submit} className='flex flex-col items-center mx-4 mt-8 lg:mx-12 px-12 py-8 rounded-md bg-gray-50'>
            <p className='text-3xl font-bold text-center mb-8'>Add To Meal</p>
            <div>
                <input name='amount' type="text" className="mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mr-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" required />
                <input type="submit" value="Submit" className='cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' />
            </div>
        </form>
    );
};

export default AddToMeal;