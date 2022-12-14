import React from 'react';

import { useLoaderData } from 'react-router-dom';
import Quistios from './Quistios';


const Quiz = () => {
    const quizes = useLoaderData().data;
    console.log(quizes);
  const {name,questions} = quizes
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-3xl">
            Quiz of {name}
		</h1>
		
		<div className=''>
        {
            questions.map((question,index) => <Quistios id={index+1} key={question.id} questionItem={question}/>)
        }
        </div>
	</div>
</section>
        </div>
    );
};

export default Quiz;