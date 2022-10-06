import React from 'react';

const ExpenseCard = (props) => {
    return (
        <div className='grid grid-cols-3 bg-[whitesmoke] rounded p-4 mx-8 my-2 font-bold'>
            <p>Date : <span className='text-green-400'>{props.expense.date}</span></p>
            <p>{props.expense.description}</p>
            <p className='text-red-500'>{props.expense.amount}Tk</p>
        </div>
    );
};

export default ExpenseCard;