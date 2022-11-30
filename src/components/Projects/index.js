import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";


function Projects(props) {
    const currentCategory = {
        name:"projects",
        description:"A small description of the project and what it does"
    };
    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div className="flex-row">
                <img src={ photo } alt="Project Example" className="img-thumbnail mx-1"/>
            </div>
        </section>
    )
}

export default Projects;