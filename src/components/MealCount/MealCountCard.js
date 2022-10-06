import React from 'react';
import { Link } from 'react-router-dom';

const MealCountCard = (props) => {
    let totalMealToday = 0;
    props.meal.map(single => totalMealToday += single)
    const month = new Date().getUTCMonth()
    const monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <div className='grid grid-cols-3 font-bold px-4 lg:px-12 py-1 mx-4 lg:mx-12 my-2 bg-[whitesmoke] rounded'>
            <div className='flex items-center'>
                <p>{monthName[month]} {props.date}</p>
            </div>
            <div className='flex items-center'>
                <p className={props.mealCount==0? 'text-red-500' : 'text-green-500'}>
                <span>{totalMealToday} </span>
                <span>[</span><span>{props.meal.map(single=> single,)}</span><span>]</span>
                </p>
            </div>
            <div className='flex items-center'>
                <div>
                    <Link to={`/meal-count-card-update?name=${props.name}&index=${props.index}`}>
                        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm p-1.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            update
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MealCountCard;