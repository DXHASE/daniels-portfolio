import React from 'react';
import photo from "../../assets/small/commercial/0.jpg";
import pic from "../../assets/small/commercial/1.jpg"


function Projects() {
    return(
        <section>
            <h1 id="projects">Portfolio</h1>
            <div className="flex-row">
                <img src={ photo } alt="Project Example" className="img-thumbnail mx-1"/>
            </div>
            <div className="flex-row">
                <img src={ pic } alt="another example" className=" img-thumbnail mx-1"></img>
            </div>
        </section>
    )
}

export default Projects;