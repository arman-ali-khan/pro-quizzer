import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItems from './QuizItems';

const Home = () => {
    const quizes = useLoaderData([]).data;
    console.log(quizes);
    return (
        <div className='grid grid-cols-1 w-9/12 md:grid-cols-4 gap-3 md:container mx-auto md:mt-24'>
           {
            quizes.map(quiz => <QuizItems key={quiz.id} quiz={quiz}/>)
           }
        </div>
    );
};

export default Home;