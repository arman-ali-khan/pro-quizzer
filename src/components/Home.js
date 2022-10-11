import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItems from './QuizItems';

const Home = () => {
    const quizes = useLoaderData([]).data;
    console.log(quizes);
    return (
        <div>
          <p className=' my-12 text-4xl font-bold uppercase mt-4'>Welcome To Pro Quizzer</p>
           <div className='flex justify-center'>

           <div className='flex items-center mb-6'>
               <img src="https://cdn-icons-png.flaticon.com/512/2572/2572630.png" className='h-12 mr-7' alt="" />
            <p className='text-2xl'>Improve your programming skills</p>
            </div>
           </div>
         <div className='grid grid-cols-1 w-[80%] md:w-[90%] md:grid-cols-4 gap-3 md:container mx-auto md:mt-24'>
         {
            quizes.map(quiz => <QuizItems key={quiz.id} quiz={quiz}/>)
           }
         </div>
        </div>
    );
};

export default Home;