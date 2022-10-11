import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
const Statics = () => {
    const quizStatics = useLoaderData().data

    return (
        <div className='flex justify-center mt-12'>
         <LineChart width={600} height={300} data={quizStatics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </div>
    );
};

export default Statics;