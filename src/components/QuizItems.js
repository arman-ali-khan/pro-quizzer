import React from 'react';
import { BiChevronsRight } from "react-icons/bi";
import { Link } from 'react-router-dom';

const QuizItems = ({quiz}) => {
    const {name,total,logo,id} = quiz;
    console.log(quiz);
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className='bg-blue-200'><img src={logo} className='' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
         <div className='flex justify-between w-full items-center'>
         <p>Total Quiz: {total}</p>
            <Link  to={`quiz/${id}`}>
            <button  className="btn  btn-info btn-sm md:btn-xs text-white">Start Quiz <BiChevronsRight className='text-lg'/></button>
            </Link>
         </div>
          </div>
        </div>
      </div>
    );
};

export default QuizItems;