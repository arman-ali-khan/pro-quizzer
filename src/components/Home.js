import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItems from './QuizItems';

const Home = () => {
    const quizes = useLoaderData([]).data;
    console.log(quizes);
    return (
        <div>
           <div className='flex justify-center my-12'>
           <div className='flex items-center'>
            <img src="https://cdn-icons-png.flaticon.com/512/2572/2572630.png" className='h-16 mr-7' alt="" />
            <p className='text-4xl font-bold uppercase mt-4'>Build Your Skill</p>
            </div>
           </div>
         <div className='grid grid-cols-2 w-[90%] md:w-9/12 md:grid-cols-4 gap-3 md:container mx-auto md:mt-24'>
         {
            quizes.map(quiz => <QuizItems key={quiz.id} quiz={quiz}/>)
           }
         </div>
        </div>
    );
};

export default Home;