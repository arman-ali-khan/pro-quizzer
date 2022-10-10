import React from 'react';

const QuizItems = ({quiz}) => {
    const {name,total,logo} = quiz;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure className='bg-blue-200'><img src={logo} className='' alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="card-actions justify-end">
          <p>Total Quiz: {total}</p>
            <button className="btn btn-info btn-xs text-white">Start Quiz</button>
          </div>
        </div>
      </div>
    );
};

export default QuizItems;