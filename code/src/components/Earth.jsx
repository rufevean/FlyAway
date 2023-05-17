import { Canvas } from "@react-three/fiber";
import {Environment , OrbitControls} from "@react-three/drei";
import Model1 from "../assets/models/model1/Model1"
import '../styles/Earth.css'

function Earth() {

    return (
        <div className="Canvas">
            <Canvas >
                <Model1/>
                <OrbitControls rotateSpeed={1} enablePan={false} enableDamping={false} enableZoom={false} autoRotate />
                
            </Canvas>
        </div>
    );
}

export default Earth;
