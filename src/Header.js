import { useState, useEffect } from 'react';
import './assets/css/Header.css';
import FV from './assets/icons/fv-icon.svg';


export default function Header(props) {
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };

  const scrollDirection = useScrollDirection();

  return (
    <header className={`header ${ scrollDirection === "down" ? "hide" : "show"}`}>
      <img src={FV} className="fv-icon" alt="Faizaan Vidhani"></img>
        <ul className="nav-container">
            <li onClick={props.scrollToHome}><a className="nav-link">Home</a></li>
            <li onClick={props.scrollToProjects}><a className="nav-link">Projects</a></li>
            <li><a href="https://drive.google.com/file/d/1fpi_-WTBwttSw4c6Bl7gyxq33f-umM6K/view?usp=sharing"className="nav-link">Resume</a></li>
        </ul>
    </header>
  )
}