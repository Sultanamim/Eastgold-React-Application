import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import ProductImg1 from "../../assets/product-img-1.jpg";
import ProductImg2 from "../../assets/product-img-2.jpg";
import ProductImg3 from "../../assets/product-img-3.jpg";
import ProductImg4 from "../../assets/product-img-4.jpg";
import ProductImg5 from "../../assets/product-img-5.jpg";
import BreadCrumbImg from "../../assets/breadcrumb.jpg";

export default function Portfolios() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Define the items that correspond to each filter

  const externalImg =
    "https://businesso.xyz/assets/front/img/user/breadcrumb.jpg";

  // Define your projects with corresponding filters
  const projects = [
    {
      title: "Free Consulting",
      category: "Consulting",
      img: ProductImg5,
      itemClass: "item-87",
    },
    {
      title: "Investment Plan",
      category: "Consulting",
      img: ProductImg3,
      itemClass: "item-87",
    },
    {
      title: "Business Growth",
      category: "Web Development",
      img: ProductImg2,
      itemClass: "item-88",
    },
    {
      title: "Financial Planning",
      category: "Web Development",
      img: ProductImg2,
      itemClass: "item-88",
    },
    {
      title: "IT Consulting",
      category: "Graphic Design",
      img: ProductImg4,
      itemClass: "item-89",
    },
    {
      title: "Relationship",
      category: "Graphic Design",
      img: ProductImg1,
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
            <h1 className="page-title"> Our Projects</h1>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li> Our Projects</li>
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
            className="row d-flex flex-row project-boxes project-isotope mt-60 justify-content-center"
            style={{ position: "relative", height: "800px", marginTop: "3rem" }}
          >
            {filteredProjects.map((project, index) => {
              const leftPosition = (index % 3) * 33.3333;
              const topPosition = Math.floor(index / 3) * 400;
              return (
                <div
                  key={index}
                  className={`isotope-item col-12 col-md-6 col-lg-4  ${project.itemClass}`}
                 
                >
                  <div className="project-box hover-style">
                    <a className="project-thumb" href="#">
                      <div
                        className="thumb bg-img-c lazy entered error"
                        data-bg={project.img}
                        data-ll-status="error"
                        style={{ backgroundImage: `url(${project.img})` }}
                      ></div>
                    </a>
                    <div className="project-desc text-center">
                      <h4>
                        <a href="#">{project.title}</a>
                      </h4>
                      <p>{project.category}</p>
                      <a href="#" className="project-link">
                        <i className="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
