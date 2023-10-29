import React, { useEffect, useState } from "react";
import "../Portfolios/Portfolio.css";
import ProductImg1 from "../../assets/gold.jpg";
import ProductImg2 from "../../assets/gold2.jpg";
import ProductImg3 from "../../assets/gold3.jpg";
import ProductImg4 from "../../assets/gold.jpg";
import ProductImg5 from "../../assets/gold3.jpg";
import BreadCrumbImg from "../../assets/gold2.jpg";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import { Translation } from "react-i18next";
import { useTranslation } from "react-i18next";



export default function Portfolios() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const { t, i18n } = useTranslation();
  // Define the items that correspond to each filter

  const externalImg =
    "https://businesso.xyz/assets/front/img/user/breadcrumb.jpg";

  // Define your projects with corresponding filters
  const projects = [
    {
      title: "Free Consulting",
      category: "Consulting",
      img: ProductImg5,
      img1: ProductImg5,
      img2: ProductImg5,
      itemClass: "item-87",
    },
    {
      title: "Investment Plan",
      category: "Consulting",
      img: ProductImg3,
      img1: ProductImg3,
      img2: ProductImg3,
      itemClass: "item-87",
    },
    {
      title: "Business Growth",
      category: "Web Development",
      img: ProductImg2,
      img1: ProductImg2,
      img2: ProductImg2,
      itemClass: "item-88",
    },
    {
      title: "Financial Planning",
      category: "Web Development",
      img: ProductImg2,
      img1: ProductImg2,
      img2: ProductImg2,
      itemClass: "item-88",
    },
    {
      title: "IT Consulting",
      category: "Graphic Design",
      img: ProductImg4,
      img1: ProductImg4,
      img2: ProductImg4,
      itemClass: "item-89",
    },
    {
      title: "Relationship",
      category: "Graphic Design",
      img: ProductImg1,
      img1: ProductImg1,
      img2: ProductImg1,
      itemClass: "item-89",
    },
    // Add more projects here
  ];

  // Filter the projects based on the active filter
  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === activeFilter
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  return (
    <>
      {/* ---------- Breadcrumb Section -------- */}
      <section
        className="breadcrumb-section bg-img-c lazy entered loaded"
        data-bg={externalImg}
        data-ll-status="loaded"
        style={{ backgroundImage: `url(${externalImg})` }}
      >
        <div className="container">
          <div className="breadcrumb-text">
            <h1 className="page-title"> Our Products</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li> Our products</li>
            </ul>
          </div>
        </div>
        <div className="breadcrumb-shapes">
          <div className="one"></div>
          <div className="two"></div>
        </div>
      </section>


   
      {/* ----------  Project Section -------- */}
      <section className="project-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-md-12">
              {/* Filter buttons */}
              <ul className="project-nav project-isotope-filter">
                <li
                  onClick={() => setActiveFilter("all")}
                  className={activeFilter === "all" ? "active" : ""}
                >
                  All
                </li>
                <li
                  onClick={() => setActiveFilter("Consulting")}
                  className={activeFilter === "Consulting" ? "active" : ""}
                >
                  Consulting
                </li>
                <li
                  onClick={() => setActiveFilter("Web Development")}
                  className={activeFilter === "Web Development" ? "active" : ""}
                >
                  Web Development
                </li>
                <li
                  onClick={() => setActiveFilter("Graphic Design")}
                  className={activeFilter === "Graphic Design" ? "active" : ""}
                >
                  Graphic Design
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- Project Boxes --> */}
          <div
            className="row project-boxes project-isotope mt-60 justify-content-center"
            style={{ position: "relative", height: "800px", marginTop: "3rem" }}
          >
            {filteredProjects.map((project, index) => {
              const leftPosition = (index % 3) * 33.3333;
              const topPosition = Math.floor(index / 3) * 400;
              return (
                <div
                  key={index}
                  className={`isotope-item col-lg-4 col-sm-6 ${project.itemClass}`}
                 
                >
                  <div className="project-box hover-style">
                

                     <Slider autoplay={3000}>
                      <img src={project.img} />
                      <img src={project.img1} />
                      <img src={project.img2} />
                    </Slider>
               
      
                  <div className="project-desc text-center">
                    
                      {/* <p>{project.category}</p> */}
                      <p>Doloremque laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi</p>
                    
                      <a href="tel:+0777121090" className="main-btn float-center m-0">
                    
                        {t("Buy now")}
                      </a>

                      {/* <a href="#" className="project-link">
                        <i className="fas fa-arrow-right"></i>
                      </a> */}
                    </div> 
                    
                  </div>
                  <div className="thumb bg-img-c lazy entered error" style={{textAlign: "center"}}>
                  <h4>{project.title}</h4>
                  <h4><b>500 AZN</b></h4>
                  </div>
                  
                </div>

              );
            })}
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </>
  );
}
