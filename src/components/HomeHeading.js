import '../assets/css/components/HomeHeading.css';
import Typewriter from "typewriter-effect";
import GitHubIcon from '../assets/icons/github-icon.svg';
import LinkedInIcon from '../assets/icons/linkedin-icon.png';
import MailIcon from '../assets/icons/mail-icon.svg';
export default function HomeBody(props) {
    return (
        <div className="home-main-container">
          <p ref={props.homeRef} className="home-heading">Faizaan Vidhani</p>
          <div className="home-typewriter">
            <Typewriter
              onInit={(typewriter)=> {
                typewriter
                  .typeString("Software Engineer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Neuroscientist")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Software Engineer + Neuroscientist")
                  .start();
              }}
            />
          </div>
          <div className="home-icons">
            <a href="https://github.com/faizaanvidhani"><img src={GitHubIcon} className="home-icon" alt="github-icon"></img></a>
            <a href="https://www.linkedin.com/in/faizaanvidhani/"><img src={LinkedInIcon} className="home-icon" alt="linkedin-icon"></img></a>
            <a href="mailto:faizaanvidhani@gmail.com"><img src={MailIcon} className="home-icon" alt="mail-icon"></img></a>
          </div>
        </div>
    )
}