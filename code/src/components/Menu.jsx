import "../styles/HomePage.css";
import { useState } from "react";
export default function Menu(props) {
    const [isSelected,setSelected] = useState(false);

    const handleCheckboxClick = () => {
        setSelected(!isSelected);
    };

        const { isVisible } = props;

        if(isVisible){
            return (        <div className="MenuList  " id="MenuList">
            <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title1"  checked={isSelected} onChange={handleCheckboxClick} type="checkbox" /> <label  htmlFor="title1">{props.title1}</label>
            </ul>
                        <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title2" checked={isSelected} onChange={handleCheckboxClick}checked={isSelected} onChange={handleCheckboxClick} type="checkbox" /> <label htmlFor="title2">{props.title2}</label>
            </ul>
                        <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title3"  checked={isSelected} onChange={handleCheckboxClick}type="checkbox" /> <label htmlFor="title3">{props.title3}</label>
            </ul>
                        <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title4" checked={isSelected} onChange={handleCheckboxClick} type="checkbox" /> <label htmlFor="title4">{props.title4}</label>
            </ul>
                        <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title5" checked={isSelected} onChange={handleCheckboxClick} type="checkbox" /> <label htmlFor="title5">{props.title5}</label>
            </ul>
                        <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title6" checked={isSelected} onChange={handleCheckboxClick} type="checkbox" /> <label htmlFor="title6">{props.title6}</label>
            </ul>
            </div>);

        }
        else{
            return (
                <div className="MenuList  " id="MenuList" >                        <ul className="MenuList__Country1 " style={{background : isSelected ? "grey" : "white" }}>
            <input id="title8" checked={isSelected} onChange={handleCheckboxClick} type="checkbox" /> <label htmlFor="title8">{props.title8}</label>
            </ul></div>
            )
        }


}
