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
            <div className="stats shadow">
  
  <div className="stat">

    <ToastContainer/>
    <div className="stat-title text-2xl flex">
      {question} 
      <button onClick={()=>showCurrectAns(correctAnswer)}><AiFillEye className='text-black' /></button>
    </div>
      <div>
      {
            options.map((option, id) => <button onClick={()=>getCurrectAns(option)} className='stat-title flex  mx-auto justify-center bg-blue-200 mb-2 p-5 ' option={option} key={id}>{option}</button>)
        }
      </div>
  </div>
  
</div>
    );
};

export default Quistios;