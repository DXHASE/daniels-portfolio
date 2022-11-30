import React from 'react';

function Nav() {
const categories = [
    {
        name:"About me",
        description:"A small descriptive paragraph of who I am and how long i've been coding"
    },
    {
        name:"Portfolio",
        description:"A collection of some of my past projects and challenges that I have fully completed"
    },
    {
        name:"Resume",
        description:"My resume"
    }
]
function categorySelected(name){
    console.log(`${name} clicked`)
}
return(

<header>
    <h2>
        <a href="/">
        <span role="img" aria-label="camera"> 📸</span> Daniel's Portfolio
        </a>
    </h2>
<nav>
    <ul className="flex-row">
        {categories.map((category) => (
        <li className="mx-1" key={category.name} >
            <span onClick={() => categorySelected(category.name)} >
                {category.name}
            </span>
        </li>
        ))}
        <li>
            <span>Contact</span>
        </li>
    </ul>
</nav>

</header>

)
}


export default Nav;