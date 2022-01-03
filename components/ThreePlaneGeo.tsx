import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { AnimationClip } from "three/src/animation/AnimationClip"; //Animation types

interface group {
    current: {
      rotation: {
        x: number;
        y: number;
      };
    };
}

function ThreePlaneGeo(props) {

    const group: group = useRef();

    const [animation] = useState<AnimationClip[] | null>(null);

    const [mixer] = useState(() => new THREE.AnimationMixer(null));

    /* Set animation */
    useEffect(() => {
    }, [animation]);

    /* Animation update */
    useFrame((_, delta) => mixer.update(delta));
    /* Rotation */
    useFrame(() => {
        if (typeof group.current != "undefined")
        return (group.current.rotation.z += props.zRotation);
    });


    return(
        <>
            <group
                ref={group} 
                rotation={props.rotation}
                position={props.position}
            >
                <mesh key={props.key}>
                    <planeBufferGeometry attach="geometry" args={props.geometry} />
                    <meshPhongMaterial attach="material" color={props.color} />
                </mesh>
            </group>
        </>
    )

}

export default ThreePlaneGeo