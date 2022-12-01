import React from 'react';
import photo from "../../assets/screenshots/0.jpg";
import pic from "../../assets/screenshots/1.png"


function Projects() {
    return(
        <section>
            <h1 id="projects">Portfolio</h1>
            <div className="flex-row">
                <img src={ photo } alt="Project Example" style={{ width: "85%" }}className="img-thumbnail mx-1"/>
                <a href="https://github.com/DXHASE/Collective-Social-App">Collective Social App</a>

            </div>
            <div className="flex-row">
                <img src={ pic } alt="another example" className="img-thumbnail mx-1" style={{ width: "85%" }}/>
                <a href="https://github.com/DXHASE/Music-Match">Music Match</a>
            </div>
        </section>
    )
}

export default Projects;