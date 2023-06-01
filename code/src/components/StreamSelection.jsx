import "../styles/StreamSelection.css"
import { NavLink } from "react-router-dom";

export default function StreamSelection() {
	return (
		<div className="StreamSelection">
			<div className="StreamSelection__Title">
				WHICH FIELD DO YOU WANT TO PURSUE?
			</div>
			<NavLink to={"/destination"}>
			<button className="StreamSelection__option1 StreamSelection__option">Engg/Science</button></NavLink>
			<button className="StreamSelection__option2 StreamSelection__option">Medicine</button>
		</div>
	);
}
