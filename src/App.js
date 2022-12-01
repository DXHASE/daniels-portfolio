import React from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
        <Nav></Nav>
      <main>
        <Header></Header>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
