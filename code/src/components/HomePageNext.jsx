import "../styles/HomePage.css";
import Nextbutton from "../assets/images/next.png";
import { NavLink } from "react-router-dom";


export default function HomePageNext() {

    return (
        <NavLink to={"/streamoptions"} >
        <button className="next">
            <img src={Nextbutton} className="nextImage" alt="Next" />
        </button></NavLink>
    );
}