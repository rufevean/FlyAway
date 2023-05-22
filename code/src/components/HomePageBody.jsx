import React, { useState } from "react";
import "../styles/HomePage.css";
import Menu from "../components/Menu";
import Dropdown from "../assets/images/Vector.png";

export default function HomePageBody() {
    const [showMenu, setShowMenu] = useState(false); // State to track menu visibility

    function handleCheckboxChange() {
        setShowMenu(!showMenu); // Toggle menu visibility
    }

    return (
        <nav className="HomePage__nav">
            <div className="HomePage__Title">Where are you located?</div>
            <div className="HomePage__SubTitle">
                <div className="HomePage__SubTitle__text">
                    SELECT YOUR COUNTRY
                </div>
                <input
                    type="checkbox"
                    name="input__Checkbox"
                    unchecked={true}
                    id="input__Checkbox"
                    onClick={handleCheckboxChange} // Use the handler function
                    className="input__Checkbox"
                ></input>
                <label
                    className="input__Checkbox__Icon"
                    htmlFor="input__Checkbox"
                >
                    <img src={Dropdown} alt="dropdown"></img>
                </label>
            </div>
            {showMenu && <Menu />}{" "}
            {/* Render the menu based on showMenu state */}
        </nav>
    );
}
