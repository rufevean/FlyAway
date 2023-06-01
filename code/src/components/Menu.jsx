import "../styles/HomePage.css";
export default function Menu(props) {
    
        const { isVisible } = props;
        const alert1 = () => {
            alert();
        }
        
        if(isVisible){
            return (        <div className="MenuList  " id="MenuList">
            <ul className="MenuList__Country1 ">
            <input id="title1" onClick={alert1} type="checkbox" /> <label htmlFor="title1">{props.title1}</label>
            </ul>
                        <ul className="MenuList__Country1 ">
            <input id="title2" onClick={alert1} type="checkbox" /> <label htmlFor="title2">{props.title2}</label>
            </ul>
                        <ul className="MenuList__Country1 ">
            <input id="title3" onClick={alert1} type="checkbox" /> <label htmlFor="title3">{props.title3}</label>
            </ul>
                        <ul className="MenuList__Country1 ">
            <input id="title4" onClick={alert1} type="checkbox" /> <label htmlFor="title4">{props.title4}</label>
            </ul>
                        <ul className="MenuList__Country1 ">
            <input id="title5" onClick={alert1} type="checkbox" /> <label htmlFor="title5">{props.title5}</label>
            </ul>
                        <ul className="MenuList__Country1 ">
            <input id="title6" onClick={alert1} type="checkbox" /> <label htmlFor="title6">{props.title6}</label>
            </ul>
            </div>);

        }
        else{
            return (
                <div className="MenuList  " id="MenuList" >                        <ul className="MenuList__Country1 ">
            <input id="title8" onClick={alert1} type="checkbox" /> <label htmlFor="title8">{props.title8}</label>
            </ul></div>
            )
        }


}

