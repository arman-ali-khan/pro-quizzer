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
        <div className="collapse-content"> 
          <p>Context API is a component-based front-end framework that passes data from one component to another. It appears like passing data from parent to child components. Certain props like UI themes, language settings, local preferences, and others need different components with the application. <br />
          <br />
Context API comes to play to overcome issues and create a pathway for sharing data values in components. It is best for react js development to prevent prop via every app-level tree.<br /><br />

If you need to work with context API, you can get proper assistance from a developer and use them properly in the project.<br /><br />

Context API is an important structure in react framework to share specific data throughout different levels of application.<br />
Developers bring importance to such a component for solving prop drilling. It is a great thing to move forward for application stability.<br /><br />

API is a new addition to react framework features and supports developers to create a wonderful project.</p>
        </div>
      </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
        What purpose is React Router DOM used for?
        </div>
        <div className="collapse-content"> 
          <p>A context contains references to variables and notifies its consumers when these references are changed. There are no restrictions on what type of values you can provide, so we can easily pass in functions that can be used to communicate events back from consumers, for example.
<br/>
<br/>
To create a context, call the createContext function with an arbitrary value. This will be the default value provided to the consumers. Optionally provide an interface describing we provided object. The returned object will contain helper components we need to provide or consume this context. </p>
        </div>
      </div>
        </div>
    );
};

export default Blog;