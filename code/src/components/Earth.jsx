import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model1 from "../assets/models/model1/Model1";
import "../styles/Earth.css";
import { useState } from "react";
function Earth() {
    return (
        <div className="Canvas">
            <Canvas>
                <OrbitControls
                    rotateSpeed={1}
                    enablePan={false}
                    enableDamping={false}
                    enableZoom={false}
                    autoRotate
                    enableRotate={false}
                />
                <Model1 />
            </Canvas>
        </div>
    );
}

export default Earth;
