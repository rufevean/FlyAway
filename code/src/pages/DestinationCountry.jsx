import '../styles/DestinationCountry.css';
import Greeting from "../components/Greeting";
import HomePageBody from "../components/HomePageBody";
import HomePageLogo from "../components/HomePageLogo";
import HomePageNext from "../components/HomePageNext";
import { useState } from "react";

export default function DestinationCountry() {
    return (
        <div className="DestinationCountry">
            <Greeting isVisible={true} />
            <HomePageBody flag={false} info="Where do you want to study?" home={false} />
            {/*<Earth /> */}
            <HomePageLogo />
            <HomePageNext />
        </div>
    );
}
