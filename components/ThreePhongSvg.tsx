import React, { useState, useRef } from "react";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader'

function ThreePhongSvg(props) {

  /* Load SVG */
  const { paths } = useLoader(SVGLoader, props.url)  

  /* Map svg paths */
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
          rotation={props.rotation}
          position={props.position}
          scale={props.scale}
        >
        {shapes.map(function({ shape, rotation, position, color, opacity, index }){
          return <mesh rotation={rotation} position={position} key={shape.uuid}>
            <meshPhongMaterial color={color} opacity={opacity} emissive={color} side={THREE.DoubleSide} depthWrite={false} transparent />
            <shapeGeometry args={[shape]} />
        </mesh>
        })}
      </group>
    </>
  )


}

export default ThreePhongSvg