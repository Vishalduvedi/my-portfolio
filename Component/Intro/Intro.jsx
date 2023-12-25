import React from 'react';
import './Intro.css';
import gym from '../../image/gym.jpg';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introcontent">
                <span className="hello">Hello</span><br/>
                <span className='introtext'>I'm <span className="introname">Vishal</span><br /> website designer</span><br/>
                <p className="introaboutme">I am a skilled web designer with experience in creating visuals & I will be a goodI am a skilled web designer with experience in creating visuals </p>
               
                <Link><button className='introbtn'>Hire me</button></Link>
            </div>

                

                    <img src={gym} alt="gym" className="gym" />

        </section>
    )
}

export default Intro;
