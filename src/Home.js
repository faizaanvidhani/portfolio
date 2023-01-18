import './assets/css/Home.css';
import HomeHeading from './components/HomeHeading';
import HomeBody from './components/HomeBody';
import ProfilePhoto from './assets/images/profile-photo.svg'

export default function Home(props) {
    return (
      <div className="home-container">
        <div className="home-heading-photo-container">
            <HomeHeading homeRef={props.homeRef}/>
            <img src={ProfilePhoto} className="home-photo" alt="Faizaan Vidhani"></img>
        </div>
        <HomeBody/>
      </div>
  )
}