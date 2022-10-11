import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Error from "../components/Error";
import Home from "../components/Home";
import Quiz from "../components/Quiz";
import Statics from "../components/Statics";
import Root from "../Layout/Root";

export const router = createBrowserRouter([
    {path:'/',errorElement:<Error />, element:<Root />,children:[
        {path:'/',loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'), element: <Home />},

        {path:'quiz/:quizId', 
        loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`);
        },
         element: <Quiz />},
        {path:'blog', element: <Blog />},
        {path:'statics',loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'), element: <Statics />},
    ]}
])