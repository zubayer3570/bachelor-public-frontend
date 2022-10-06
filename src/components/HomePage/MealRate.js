import React from 'react';

const MealRate = (props) => {
    return (
        <div>
            <h1 className='text-4xl font-bold mb-4' >Average Meal Rate</h1>
            <h1 className='flex justify-center text-5xl font-bold text-red-700'>{props.ave} Tk</h1>
        </div>
    );
};

export default MealRate;