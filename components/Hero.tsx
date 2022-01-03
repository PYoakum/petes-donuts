import * as THREE from 'three';
import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import Model from "./Model.tsx";
import Lights from "./Light.tsx";
import { Suspense } from 'react/cjs/react.production.min';
import ThreeBasicSvg from './ThreeBasicSvg.tsx';
import ThreePhongSvg from './ThreePhongSvg.tsx';
import ThreePlaneGeo from './ThreePlaneGeo.tsx';
import ThreeInteractiveSvg from './ThreeInteractiveSvg.tsx';

function Scene(){
    return(
        <>
            <ThreePlaneGeo 
                rotation={[THREE.Math.degToRad(270), THREE.Math.degToRad(45), THREE.Math.degToRad(0)]}
                position={[0, -4, 0]}
                scale={[2,2,2]} 
                geometry={[10,10]}
                color={'yellow'}
                zRotation={-0.001}
            />
            <ThreeBasicSvg 
                url='./hero.svg' 
                position={[-2.5, 3, 3]} 
                scale={[0.045, 0.045, 0.045]}
                phong={false}
                rotation={[THREE.Math.degToRad(90), THREE.Math.degToRad(0), THREE.Math.degToRad(315)]}
            />
            <ThreePhongSvg 
                url='./wing.svg' 
                position={[-0.1,-1.3,4.1]} 
                scale={[0.015, 0.015, 0.015]} 
                rotation={[THREE.Math.degToRad(90), THREE.Math.degToRad(25), THREE.Math.degToRad(280)]}
            />
            <ThreePhongSvg 
                url='./wing.svg' 
                position={[3,-2.1,-0.2]} 
                scale={[0.015, 0.015, 0.015]} 
                rotation={[THREE.Math.degToRad(60), THREE.Math.degToRad(180), THREE.Math.degToRad(30)]}
            />
            <ThreeInteractiveSvg 
                url='./order.svg'
                linkUrl='./order' 
                position={[1.3, 3, 2.9]} 
                scale={[0.025, 0.025, 0.025]}
                hoverColor={'purple'}
                rotation={[THREE.Math.degToRad(90), THREE.Math.degToRad(0), THREE.Math.degToRad(315)]}
            />
        </>
    )

}

// 



export default function Hero() {
    return (
        <div className='container h-400'>
            <Canvas 
                className='hero-canvas' 
                style={{width: '100vw', height: '100vh'}} 
                camera={{ fov: 75, position: [1, 8, 1] }} 
                onCreated={ state => state.gl.setClearColor('#00cbff')} >
                <OrbitControls />
                <Lights />
                <Model 
                    url="./objects/donut.glb" 
                    primitiveName="Object_0" 
                    yRotation={0.01} 
                    position={[-2, 0, -2]} />
                <Model 
                    url="./objects/donut_box.glb" 
                    primitiveName="Object_1" 
                    scale={0.4} 
                    rotation={[THREE.Math.degToRad(40), THREE.Math.degToRad(130), THREE.Math.degToRad(270)]} 
                    position={[2.5, 0, 2.5]}/>
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>     
            </Canvas>        
        </div>  
    )
}