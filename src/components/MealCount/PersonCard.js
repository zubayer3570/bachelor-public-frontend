import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PersonCard = (props) => {
    const { isLoading: isLoadingAveMealRate, data: aveMealRate } = useQuery(`fetch-ave-meal-rate`, () => {
        return axios.get(`https://bachelor-public-backend.onrender.com/get-ave-meal-rate`)
    })
    const { isLoading: isLoadingPersonMeal, data: totalPersonMealData } = useQuery(`fetch-total-meal-${props.data.name}`, () => {
        return axios.get(`https://bachelor-public-backend.onrender.com/get-person-meal/${props.data.name}`)
    })
    const totalPersonMeal = totalPersonMealData?.data.totalPersonMeal
    const mealExpense = aveMealRate?.data.ave * totalPersonMeal
    return (
        <div className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.data.name}</h5>
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Meal Consumed: {totalPersonMeal} <span>(</span>{mealExpense?.toFixed(2)}Tk<span>)</span></h5>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                <Link to={`/meal-count-details/${props.data.name}`} >
                    See Details
                </Link>
            </button>
        </div>
    );
};

export default PersonCard;