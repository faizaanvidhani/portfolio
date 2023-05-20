import '../assets/css/components/HomeBody.css';
export default function HomeBody() {
    return (
        <div className="home-body">
            <p className="home-body-text">
            Hi! I'm Faizaan (he/him/his). I’m a Dallas native with a passion for health technology, computer systems, and 
            clinical applications of AI. I graduated from <a className="home-link" href="https://www.brown.edu">Brown University</a> with concentrations
            in <span className="home-important">neuroscience</span> and <span className="home-important">computer science</span>. 
            </p>
           
            <p className="home-body-text">
            I love tackling challenging problems in both the <span className="home-important">health</span> and <span className="home-important">tech</span> space.
            I am specifically passionate about leveraging computational tools and methods to reduce inefficiencies and improve patient outcomes.
            </p>

            <p className="home-body-text">
            If you're looking to connect, let's chat via <a className="home-important" href="mailto:faizaanvidhani@gmail.com">email</a>! 
            </p>

        </div>
    )
}