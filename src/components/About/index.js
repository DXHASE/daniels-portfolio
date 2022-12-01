import React from 'react';
import coverImage from "../../assets/cover/1.jpg"


function About(){
    return(
        <section>
        <h1 id="about">About Me!</h1>
        <a href="https://github.com/DXHASE/daniels-portfolio"><img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover"/></a>
        <p>My name is Daniel Chase</p>
        </section>
    )
}
export default About;