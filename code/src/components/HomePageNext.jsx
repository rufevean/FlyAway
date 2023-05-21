import "../styles/HomePage.css";
import Nextbutton from "../assets/images/next.png";

export default function HomePageNext() {
    function test() {
        alert("slavery test");
    }
    return (
        <button onClick={() => test()} className="next">
            <img src={Nextbutton} className="nextImage" alt="Next" />
        </button>
    );
}
