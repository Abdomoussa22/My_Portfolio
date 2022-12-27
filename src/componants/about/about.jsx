import React from "react";
import "./about.css";
import ME from "../../assets/me.jpeg";
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <>
      <section id="about">
        <h5>GetTo Know</h5>
        <h2>About Me</h2>
        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about-content">
            <div className="about-cards">
                <article className="about-card">
                    <FaAward className="about-icon"/>
                    <h5>Experience</h5>
                    <small>A Fresh Graduate</small>
                </article>
                <article className="about-card">
                    <FiUsers className="about-icon"/>
                    <h5>Clients </h5>
                    <small>NO Clients Yet</small>
                </article>
                <article className="about-card">
                    <VscFolderLibrary className="about-icon"/>
                    <h5>Projects</h5>
                    <small>30+ Completed</small>
                </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptates, mollitia dolores dolore asperiores laboriosam quasi sit dignissimos corrupti quibusdam consequatur reiciendis! Eos ratione fuga non numquam dignissimos dolores quam!</p>

            <a href="#contact" className="btn btn-primary"> Let's Talk</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
