import React from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import './styles.css'


function Landing(){
    return(
        
     <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={logoImg} alt="Proffy"/>
                <h2>Your online study platform</h2>
            </div>

            <img 
                className="hero-image" 
                src={landingImg} 
                alt="Plataforma de estudos"
            />

            <div className="buttons-container">
                <Link to='/study' className="study">
                    <img src={studyIcon} alt="Study"/>
                    Study
                </Link>
                <Link to='/give-classes' className="give-classes">
                    <img src={giveClassesIcon} alt="Give Classes"/>
                    Teach
                </Link>
            </div>

            <span className="total-connections">
                Total of 200 connections made <img src={purpleHeartIcon} alt="Coração Roxo"/>
            </span>

        </div>
     </div>
    )
}

export default Landing;