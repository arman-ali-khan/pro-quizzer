import React from 'react';
import { AiFillEye } from "react-icons/ai";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quistios = ({questionItem}) => {
    const {question,options,correctAnswer} = questionItem;

    const getCurrectAns=(answer)=>{
      if(answer === correctAnswer){
        toast.success('Currect Answer',{autoClose:500})
      }else{
        toast.error('Worng Answer',{autoClose:500})
      }
    }

    const showCurrectAns = (answer)=>{
        toast.info(` ${answer}`,{autoClose:5000}, {
          position: "top-center",
          theme: "light",
          });
      
    }
    return (
            <div className="statsw-full mb-6">
  
  <div className="stat md:w-full mx-auto shadow   bg-[#6776ff11]">

    <ToastContainer/>
    <div className="stat-title  md:text-2xl flex justify-between">
      <p className='whitespace-pre-wrap text-orange-700 font-bold text-center w-full'>
      {question} 
      </p>
      <button onClick={()=>showCurrectAns(correctAnswer)}><AiFillEye className='text-black' /></button>
    </div>
      <div className='md:inline-flex w-full md:flex-wrap m-3 '>
      {
            options.map((option, id) => <button onClick={()=>getCurrectAns(option)} className='md:w-1/2 whitespace-pre-wrap rounded-md mx-auto justify-center text-black flex w-full shadow-md mb-2 p-5 hover:bg-slate-200 ' option={option} key={id}>{option}</button>)
        }
      </div>
  </div>
  
</div>
    );
};

export default Quistios;