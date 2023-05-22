import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";
import Streamoptions from "./pages/Streamoptionspage";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handlePreloaderClick = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    // useEffect(() => {
    //     // Simulate loading or initialization process
    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 2000); // Adjust the delay time (in milliseconds) as needed
    // }, []);

    return (
        <div>
            {isLoading ? (
                <div onClick={handlePreloaderClick}>
                    <Preloader />
                </div>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/streamoptions" element={<Streamoptions />} />
                    </Routes>
                </BrowserRouter>
            )}
            
        </div>
    );
}

export default App;
