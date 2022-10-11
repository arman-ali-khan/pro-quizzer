import React from 'react';

const Blog = () => {
    return (
        <div className='md:w-3/4 mx-auto'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        What purpose is React Router DOM used for?
        </div>
        <div className="collapse-content"> 
          <p>React Router DOM is an npm package that enables we to implement dynamic routing in a web app. It allows we to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React. React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.</p>
        </div>
      </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        How does work context API?
        </div>
        <div className="collapse-content text-left"> 
          <p>Context API is a component-based front-end framework that passes data from one component to another. It appears like passing data from parent to child components. Certain props like UI themes, language settings, local preferences, and others need different components with the application. <br />
          <br />
Context API comes to play to overcome issues and create a pathway for sharing data values in components. It is best for react js development to prevent prop via every app-level tree.<br /><br />

If we need to work with context API, we can get proper assistance from a developer and use them properly in the project.<br /><br />

Context API is an important structure in react framework to share specific data throughout different levels of application.<br />
Developers bring importance to such a component for solving prop drilling. It is a great thing to move forward for application stability.<br /><br />

API is a new addition to react framework features and supports developers to create a wonderful project.</p>
        </div>
      </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        useRef hook
        </div>
        <div className="collapse-content"> 
          <p><h3 className='text-2xl'>What is useRef hook?</h3>
          <p className='text-left'>

A hook is a special function which enables one use state and other React features without writing ES6 class components which are generally considered difficult to understand, use and master. <br/>
useRef hook is part of the React Hooks API. It is a function which takes a maximum of one argument and returns an Object. The returned object has a property called current whose value is the argument passed to useRef. If we invoke it without an argument, the returned object's current property is set to undefined. The code below illustrates how to invoke the useRef hook in functional components.
          </p>

<h3 className='text-2xl'>What purpose does useRef hook serve?</h3>
Some of the use cases of useRef hook are:

<li>To access DOM elements</li>
<li>To persist values in successive renders</li>
<h3 className='text-2xl'>Accessing DOM elements</h3>
<p className='text-left'>
One of the most common use case of useRef hook is to access DOM elements (NOT custom React component). For example if we want to access an input element after it has been mounted to the DOM, instead of using document.getElementById, document.querySelector or any other method for selecting DOM elements like in vanilla javascript, we can use useRef hook.
</p>
</p>
        </div>
      </div>
        </div>
    );
};

export default Blog;