import "../styles/HomePage.css";
import { NavLink } from "react-router-dom";

export default function HomePageLogo() {
    return (
        <div className="HomePage__logo">
            <NavLink to={"/"} className="HomePage__logo__main">
                FlyAway
            </NavLink>
            <hr />
            <div className="HomePage__logo__sub">JOURNEY BEYOND BORDERS</div>
        </div>
    );
}
