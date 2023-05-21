import { useState, useEffect } from "react";
import "../styles/preloader.css";

const Preloader = ({ onClick }) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
    };

    return (
        <div
            id="preloader"
            className={`preloader ${isClicked ? "clicked" : ""}`}
        >
            <div className="outer__circle">
                <div className="inner__circle" onClick={onClick}>
                    <div className="inner__text" onClick={handleClick}>
                        START YOUR <br /> JOURNEY <br /> ABROAD
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
