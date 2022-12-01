import React from 'react';
import coverImage from "../../assets/cover/6E0CBB69-C928-4E77-898B-06E1A738897E_4_5005_c.jpeg"

function Header(){
    return(
        <section className="my-5">
            <h1 id="about">About Me!</h1>
            <a href="https://github.com/DXHASE/daniels-portfolio"><img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover"/></a>
            <p>My name is Daniel Chase</p>
        </section>
    )
}

export default Header;