import '../styles/HomePage.css';
import {useState , useEffect} from 'react';
export default function greeting(props) {
    const options = [  'Namaste,',  'Ni hao,',  'Bonjour,',  'Hello,',  'Guten Tag,',  'Hallo,',  'Hej,',  'Kamusta,']

    const { isVisible } = props;
    const [count,setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % options.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isVisible) {
    return <div className="HomePage__Welcome" id="greeting">{options[count]}</div>;
  } else {
    return null;
  }
}
