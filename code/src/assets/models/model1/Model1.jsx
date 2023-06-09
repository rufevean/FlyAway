/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 earth.glb
Author: matousekfoto (https://sketchfab.com/matousekfoto)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/earth-globe-98d2b04d46474bafb4250cc75dc583b3
Title: Earth Globe 🌍
*/
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Model1(props) {
    const { nodes, materials } = useGLTF("/earth.glb");
    const modelRef = useRef(null);
    const previousMouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        function handleMouseMove(event) {
            const currentMouse = { x: event.clientX, y: event.clientY };
            const deltaMouse = {
                x: currentMouse.x - previousMouse.current.x,
                y: currentMouse.y - previousMouse.current.y,
            };

            modelRef.current.position.x += deltaMouse.x * 0.0005;
            modelRef.current.position.y -= deltaMouse.y * 0.0005;

            previousMouse.current = currentMouse;
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <group ref={modelRef} {...props} dispose={null}>
            <group
                scale={0.2}
                position={[-1, -1.4, 0]}
                rotation={[Math.PI / 2, -0.46, Math.PI]}
            >
                <group rotation={[-Math.PI, 0, 0]}>
                    <mesh
                        geometry={nodes.meshNode_Material_u1_v1_0.geometry}
                        material={materials.Material_u1_v1}
                    />
                    <mesh
                        geometry={nodes.meshNode_Material_u2_v1_0.geometry}
                        material={materials.Material_u2_v1}
                    />
                    <mesh
                        geometry={nodes.meshNode_Material_u1_v2_0.geometry}
                        material={materials.Material_u1_v2}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("/earth.glb");
