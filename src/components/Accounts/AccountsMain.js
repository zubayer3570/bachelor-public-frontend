import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import AccountCard from './AccountCard';

const AccountsMain = () => {
    const { isLoading, data } = useQuery("fetch-account-names", () => axios.get('https://bachelor-public-backend.onrender.com/get-account-names'))
    return (
        <>
            <h1 className='text-3xl font-bold pt-4 text-center'>Accounts</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 p-8'>
                {
                    data?.data.data.map(account => <AccountCard key={account._id} name={account.name} />)
                }
            </div>
            <div className='flex justify-center'>
                <Link to={"/add-account"}>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Add Accoun +
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

export default AccountsMain;