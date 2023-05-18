import Earth from "../components/Earth";
import "../styles/HomePage.css";
import Dropdown from "../assets/images/Vector.png";
import Nextbutton from "../assets/images/next.png";

function HomePage() {
    return (
        <div className="HomePage">
            <div className="HomePage__Welcome">Hello,</div>
            <nav className="HomePage__nav">
                <div className="HomePage__Title">Where are you located?</div>
                <div className="HomePage__SubTitle">
                    <div className="HomePage__SubTitle__text">
                        SELECT YOUR COUNTRY
                    </div>
                    <img
                        src={Dropdown}
                        className="HomePage__SubTitle__icon"
                    ></img>
                </div>
            </nav>
            <Earth />
            <div className="HomePage__logo">
                <div className="HomePage__logo__main">FlyAway</div>
                <hr/>
                <div className="HomePage__logo__sub">JOURNEY BEYOND BORDERS</div>
            </div>
            <button className="next">
                <img src={Nextbutton} className="nextImage" alt="Next" />
            </button>
        </div>
    );
}

export default HomePage;
