import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Preloader from "./components/Preloader";
import { useState, useEffect } from "react";
import Streamoptions from "./pages/Streamoptionspage";
import DestinationCountry from './pages/DestinationCountry'

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handlePreloaderClick = () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

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
                        <Route path="/destination" element={<DestinationCountry/>}/>
                    </Routes>
                </BrowserRouter>
            )}
            
        </div>
    );
}

export default App;
