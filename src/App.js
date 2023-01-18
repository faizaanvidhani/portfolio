import { useRef } from 'react';
import './assets/css/Reset.css';
import './assets/css/App.css';

import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Footer from './Footer';

export default function App() {
    const homeRef = useRef(null);
    const projectRef = useRef(null);

    const scrollToHome = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }

    const scrollToProjects = () => {
      projectRef.current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
      <div className="background-color">
        <Header scrollToHome={scrollToHome} scrollToProjects={scrollToProjects}/>
        <Home homeRef={homeRef}/>
        <Projects projectRef={projectRef}/>
        <Footer/>
      </div>
    )
}
