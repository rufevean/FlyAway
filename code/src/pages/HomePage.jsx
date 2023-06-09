import Earth from "../components/Earth";
import "../styles/HomePage.css";
import Greeting from "../components/Greeting";
import HomePageBody from "../components/HomePageBody";
import HomePageLogo from "../components/HomePageLogo";
import HomePageNext from "../components/HomePageNext";
import { useState } from "react";
function HomePage() {

    return (
        <div className="HomePage">
            <Greeting  isVisible={true} />
            <HomePageBody  flag={true} home={true} isVisible={false} info="Where are you located?" />
             {/*<Earth /> */}
            <HomePageLogo />
            <HomePageNext />
        </div>
    );
}

export default HomePage;
