import React from 'react';

const SingleProject = () => {
    return (
        <div className='single-project'>
              <img className='project-img' src="https://picsum.photos/300" alt="Single project" />
                <div className='project-detail'>
                    <h4><b>John Doe</b></h4> 
                    <p>Architect/Engineer</p> 
                </div>
        </div>
    );
};

export default SingleProject;