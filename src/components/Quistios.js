import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Quistios = ({questionItem}) => {
    const {question,options,correctAnswer} = questionItem;

    const getCurrectAns=(id)=>{
      if(id === correctAnswer){
        toast.success('Currect Answer',{autoClose:500})
      }else{
        toast.error('Worng Answer',{autoClose:500})
      }
    }
    return (
            <div className="stats shadow">
  
  <div className="stat">

    <ToastContainer/>
    <div className="stat-title text-2xl">{question}</div>
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