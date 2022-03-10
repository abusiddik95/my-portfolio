import React from 'react';
import './About.css';
import awrd from './../../award.jpg'

const About = () => {
    return (
        <div className="about-area">
            <div className="about-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img className='img-a' src="https://picsum.photos/300/500" alt="" />
            </div>
            </div>
            <div className="about-right">
            <h1 className="a-title">About Me</h1>  
            <p className="a-sub"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>

            <p className="a-desc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa.</p>
            <div className="award">
                <div className="img">
                    <img src={awrd} alt="" />
                </div>
                <div className="award-text">
                    <h4>International Front-end Developer Award</h4>    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default About;