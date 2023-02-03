import React from "react";
import Fade from 'react-reveal/Fade';
import "./portfolio.css";
import IMG1 from "../../assets/hero.png";
import IMG2 from "../../assets/img crud.png";
import IMG3 from "../../assets/travel.png";
import IMG4 from "../../assets/shope.png";
import IMG5 from "../../assets/youtube img2.jpg";
import IMG6 from "../../assets/spicial.webp";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Restaurant Site",
    github: "https://github.com/Abdomoussa22/Resturant_App.git",
    demo: "https://abdomoussa22.github.io/Resturant_App/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crud App React And Redux",
    github: "https://github.com/Abdomoussa22/Crud_App.git",
    demo: "https://lucky-begonia-1bb348.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Travel Website",
    github: "https://github.com/Abdomoussa22/Travel_App.git",
    demo: "https://abdomoussa22.github.io/Travel_App/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Shop App",
    github: "https://github.com/Abdomoussa22/Sohp_App.git",
    demo: "https://lovely-semolina-f28b55.netlify.app",
  },
  {
    id: 5,
    image: IMG5,
    title: "Clone Youtube App",
    github:" https://github.com/Abdomoussa22/Clone_Youtube_App.git",
    demo: "https://splendid-pasca-9c38f3.netlify.app",
  },
  {
    id: 6,
    image: IMG6,
    title: "Spacial design",
    github:  "https://github.com/Abdomoussa22/our-project-for-me-by-html-css-js-.git",
    demo: "https://abdomoussa22.github.io/our-project-for-me-by-html-css-js-/",
  },
];
const Portfolio = () => {
  return (
    <>
    <Fade right>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>portfolio</h2>
        <div className="container portfolio-container">
          {data.map(({ id, image, title, github, demo }) => (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-image">
                <img src={image} alt={title} />
              </div>

              <div className="text-bt">
                <h3>{title}</h3>
                <div className="portfolio-item-cta">
                  <a className="btn" href={github} target="_blank">
                    Github
                  </a>
                  <a className="btn btn-primary" href={demo} target="_blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      </Fade>
    </>
  );
};

export default Portfolio;
