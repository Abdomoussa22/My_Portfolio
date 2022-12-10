import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
        <div className="container experience-container">
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill  className="details-icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon"/>
                <div>
                  <h4>Redux</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="experience-others">
            <h3>Others</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Node.JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Problem Solving</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>SASS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Git</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Github</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience-details">
                <BsPatchCheckFill className="details-icon" />
                <div>
                  <h4>Netlify</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experience;
