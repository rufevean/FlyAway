import Earth from "../components/Earth";
import "../styles/HomePage.css";
import Greeting from "../components/Greeting";
import HomePageBody from "../components/HomePageBody";
import HomePageLogo from "../components/HomePageLogo";
import HomePageNext from "../components/HomePageNext";
function HomePage() {
    return (
        <div className="HomePage">
            <Greeting />
            <HomePageBody />
            <Earth />
            <HomePageLogo />
            <HomePageNext />
        </div>
    );
}

export default HomePage;
