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
        </div>
    );
};

export default Blog;