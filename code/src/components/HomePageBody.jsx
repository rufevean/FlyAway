import React, { useState } from "react";
import "../styles/HomePage.css";
import Menu from "../components/Menu";
import Dropdown from "../assets/images/Vector.png";
import scrollup from '../assets/images/arrowup.png'

export default function HomePageBody(props) {
    const [showMenu, setShowMenu] = useState(false); // State to track menu visibility
    const [arrow, setArrow] = useState(false); // State to track arrow visibility
    const { info, home } = props;
    const changearrow = () => {
        setArrow(!arrow);
    };
    function handleCheckboxChange(props) {
        setShowMenu(!showMenu); // Toggle menu visibility
    }

    return (
        <nav className="HomePage__nav">
            <div className="HomePage__Title">{info}</div>
            <div className="HomePage__SubTitle">
                <div className="HomePage__SubTitle__text">
                    SELECT YOUR COUNTRY
                </div>
                <input
                    type="checkbox"
                    name="input__Checkbox"
                    unchecked={true}
                    checked={arrow} 
                    onChange={changearrow}
                    id="input__Checkbox"
                    onClick={handleCheckboxChange} // Use the handler function
                    className="input__Checkbox"
                ></input>
                <label
                    className="input__Checkbox__Icon"
                    htmlFor="input__Checkbox"
                    
                >
                    <img src={arrow ? scrollup : Dropdown} alt="dropdown"></img>
                </label>
            </div>
            {showMenu && (
                <Menu
                    isVisible={!props.flag}
                    title1={!home ? "Singapore" : null}
                    title2={!home ? "USA" : null}
                    title3={!home ? "Canada" : null}
                    title4={!home ? "UK" : null}
                    title5={!home ? "Germany" : null}
                    title6={!home ? "Sweden" : null}
                    title8={home ? "India" : null}
                />
            )}
        </nav>
    );
}
