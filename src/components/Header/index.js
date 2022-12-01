import React from 'react';
import About from '../../components/About';
import Nav from '../../components/Nav';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import Resume from '../../components/Resume';


function Header(){
    return(
        <section>
            <Nav></Nav>
            <div className="flex-row">
                <About></About>
                <Projects></Projects>
                <Resume></Resume>
            </div>
        <Footer></Footer>
        </section>
    )
}

export default Header;