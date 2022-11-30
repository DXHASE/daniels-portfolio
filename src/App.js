import React,{ useState } from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  const [categories] = useState([
    {
      name:"about me",
      description:"A small descriptive paragraph of who I am and how long i've been coding"
  },
  {
      name:"projects",
      description:"A collection of some of my past projects and challenges that I have fully completed"
  },
  {
      name:"resume",
      description:"My resume"
  }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
        <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Projects></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
