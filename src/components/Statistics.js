import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const Statistics = () => {
    const quizStatistics = useLoaderData().data

    return (
        <div  style={{width:'90%', height: 300 }} className='flex justify-center mt-12 mx-auto'>
        <ResponsiveContainer>
        <LineChart data={quizStatistics} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Statistics;