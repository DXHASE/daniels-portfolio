import React from 'react';


function Nav() {

return(

<header className="flex-row px-1">
    <h2>
        <a href="/">
        <span role="img" aria-label="laptop">🧑🏽‍💻</span> Daniel's Portfolio
        </a>
    </h2>
<nav>
    <ul className="flex-row">
        <li className="mx-2">
            <a href="#about">
                About me
            </a>
        </li>
        <li className="mx-2">
            <a href="#projects">
                Portfolio
            </a>
        </li>
        <li className="mx-2">
            <a href="#resume"> 
                Resume 
            </a>
        </li>
        <li className="mx-2">
            <a href="#contact">
                Contact
            </a>
        </li>
    </ul>
</nav>

</header>

)
}


export default Nav;