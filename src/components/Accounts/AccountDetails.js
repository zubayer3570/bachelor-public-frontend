import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';

const AccountDetails = () => {
    const { name } = useParams()
    const { isLoading, data } = useQuery(`get-account-details-${name}`, async () => {
        const aveMealRate = await axios.get(`https://bachelor-public-backend.onrender.com/get-ave-meal-rate`)
        const personMeal = await axios.get(`https://bachelor-public-backend.onrender.com/get-person-meal/${name}`)
        const addedToMeal = await axios.get(`https://bachelor-public-backend.onrender.com/added-to-meal/${name}`)
        const aveOtherExpenses = await axios.get("https://bachelor-public-backend.onrender.com/get-ave-other-expenses")
        const addedToOther = await axios.get(`https://bachelor-public-backend.onrender.com/added-to-other/${name}`)
        return {
            aveMealRate: aveMealRate.data.ave,
            totalPersonMeal: personMeal.data.totalPersonMeal,
            addedToMeal: addedToMeal.data.addedToMeal,
            aveOtherExpenses: aveOtherExpenses.data.aveOtherExpenses,
            addedToOther: addedToOther.data.addedToOther
        }
    })
    const mealExpense = data?.totalPersonMeal * data?.aveMealRate
    const dueOfMeal = mealExpense - data?.addedToMeal

    const dueOfOther = data?.aveOtherExpenses - data?.addedToOther

    const overallDue = (dueOfMeal + dueOfOther) > 0 ? (dueOfMeal + dueOfOther) : 0;
    const overallReceivable = (dueOfMeal + dueOfOther) < 0 ? -(dueOfMeal + dueOfOther) : 0;
    return (
        <div className='flex flex-col items-center font-bold text-xl mt-12'>
            <div>
                <p className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Account Details of <span className='text-green-500'>{name}</span></p>
                <p>Meal Expense: {mealExpense}tk</p>
                <p>Added to Meal: {data?.addedToMeal}tk</p>
                <p>Due of Meal: <span className={dueOfMeal ? 'text-red-500' : 'text-green-500'}>{dueOfMeal > 0 ? dueOfMeal : 0}tk</span></p>
                <div className='h-4'></div>
                <p>Other Expense: {data?.aveOtherExpenses}tk </p>
                <p>Added to Other: {data?.addedToOther}tk </p>
                <p>Due of other Expense: <span className={dueOfOther ? 'text-red-500' : 'text-green-500'}>{dueOfOther > 0 ? dueOfOther : 0}tk</span></p>
                <div className='h-4'></div>
                <p>Overall Due: <span className={overallDue ? 'text-red-500' : 'text-green-500'}>{overallDue.toFixed(2)}tk</span></p>
                <p>Overall Receivable: <span className={overallReceivable ? 'text-green-500' : 'text-[black]'}>{overallReceivable.toFixed(2)}tk</span> </p>
                <div className='h-4'></div>
                <div>
                    <Link to={`/add-to-meal/${name}`}>
                        <button className='cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Add to Meal</button>
                    </Link>
                    <Link to={`/add-to-other/${name}`}>
                        <button className='cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>Add to Other</button>
                    </Link>
                </div>
                <Link to='/'>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Go Back To Home
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AccountDetails;