import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddPerson = () => {
    const navigate = useNavigate()
    const addPerson = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const days = [
            ["1", 0, [0, 0, 0]],
            ["2", 0, [0, 0, 0]],
            ["3", 0, [0, 0, 0]],
            ["4", 0, [0, 0, 0]],
            ["5", 0, [0, 0, 0]],
            ["6", 0, [0, 0, 0]],
            ["7", 0, [0, 0, 0]],
            ["8", 0, [0, 0, 0]],
            ["9", 0, [0, 0, 0]],
            ["10", 0, [0, 0, 0]],
            ["11", 0, [0, 0, 0]],
            ["12", 0, [0, 0, 0]],
            ["13", 0, [0, 0, 0]],
            ["14", 0, [0, 0, 0]],
            ["15", 0, [0, 0, 0]],
            ["16", 0, [0, 0, 0]],
            ["17", 0, [0, 0, 0]],
            ["18", 0, [0, 0, 0]],
            ["19", 0, [0, 0, 0]],
            ["20", 0, [0, 0, 0]],
            ["21", 0, [0, 0, 0]],
            ["22", 0, [0, 0, 0]],
            ["23", 0, [0, 0, 0]],
            ["24", 0, [0, 0, 0]],
            ["25", 0, [0, 0, 0]],
            ["26", 0, [0, 0, 0]],
            ["27", 0, [0, 0, 0]],
            ["28", 0, [0, 0, 0]],
            ["29", 0, [0, 0, 0]],
            ["30", 0, [0, 0, 0]],
            ["31", 0, [0, 0, 0]]
        ]
        fetch("https://bachelor-public-backend.onrender.com/add-person", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name: name, mealCount: days })
        })
            .then(data => navigate('/meal-count'))
    }
    return (
        <div className='flex flex-col justify-center items-center h-[70vh]'>
            <h1 className='font-bold text-center text-xl mb-4'>Add a Person to the Meal</h1>
            <form onSubmit={addPerson}>
                <input type="text" name='name' className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-3 bg-[whitesmoke]" />
                <input type="submit" value="add" className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' />
            </form>
        </div>
    );
};

export default AddPerson;