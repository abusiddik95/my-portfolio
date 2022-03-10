import React from 'react';
import './Project.css';
import SingleProject from './SingleProject';

const Project = () => {
    return (
        <div className='project-area'>
            <h1>My Work</h1>
            <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</p>
            <div className="project-list">
                <SingleProject />
                <SingleProject />
                <SingleProject />
                <SingleProject />
            </div>
        </div>
    );
};

export default Project;