import * as THREE from 'three';
import React, { useState, useEffect, useRef } from 'react';
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

function PeteLogo() {

// load main SVG
const { paths } = useLoader(SVGLoader, './hero.svg')

// map svg paths
const shapes = React.useMemo(
        () =>
          paths.flatMap((path, index) =>
            path.toShapes(true).map(shape => ({ index, shape, color: path.color }))
          ),
        [paths]
    )

    return(
        <>
            <group 
                rotation={[THREE.Math.degToRad(90), THREE.Math.degToRad(0), THREE.Math.degToRad(315)]}
                position={[-2.5, 3, 3]}
                scale={[0.045, 0.045, 0.045]}
            >
                {shapes.map(function({ shape, rotation, position, color, opacity, index }){
                    return <mesh rotation={rotation} position={position}>
                    <meshBasicMaterial color={color} opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent />
                    <shapeGeometry args={[shape]} />
                </mesh>
                })}
            </group>
        </>
    )

}

export default PeteLogo