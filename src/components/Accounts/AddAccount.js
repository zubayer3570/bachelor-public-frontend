import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddAccount = () => {
    const navigate = useNavigate()
    const addAccount = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        axios.post(`https://bachelor-public-backend.onrender.com/add-account/${name}`, { name }).then(data => navigate(`/account-details/${name}`))
    }
    return (
        <div className='flex flex-col justify-center items-center h-[70vh]'>
            <h1 className='font-bold text-center text-xl mb-4'>Add an Account</h1>
            <form onSubmit={addAccount}>
                <input type="text" name='name' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3 bg-[whitesmoke]" />
                <input type="submit" value="add" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' />
            </form>
        </div>
    );
};

export default AddAccount;