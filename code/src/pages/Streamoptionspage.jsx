import "../styles/streamoptions.css";
import HomePageLogo from "../components/HomePageLogo";
import Theme from "../components/Theme";
import Greeting from '../components/Greeting'
import StreamSelection from "../components/StreamSelection";

export default function Streamoptions(props) {
    return (
        <div className="Streamoptions">

            <Greeting isVisible={false}/>
            <StreamSelection />
            <HomePageLogo />
            <Theme />
        </div>
    );
}
