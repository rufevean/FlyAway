import Earth from "../components/Earth";
import "../styles/HomePage.css";

function HomePage() {
    return (
        <div className="HomePage">
            <nav className="HomePage__nav">
                <div className="HomePage__Welcome">Hello,</div>
                <div className="HomePage__Title">Where are you located?</div>
            </nav>
            <Earth />
        </div>
    );
}

export default HomePage;
