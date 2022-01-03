import * as THREE from 'three';
import React , { useRef, useState } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import Link from 'next/link';
import Router from 'next/router'


function ThreeInteractiveSvg(props) {

  //const router = useRouter()

  const handleClick = () => {
    Router.push({pathname:props.linkUrl})
  }

  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  // load main SVG
  const { paths } = useLoader(SVGLoader, props.url)

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
        ref={ref}
        rotation={props.rotation}
        position={props.position}
        scale={props.scale}
      >
      {shapes.map(function({ shape, rotation, position, color, opacity, index }){
        return <mesh 
        rotation={rotation} 
        position={position} 
        key={shape.uuid}
        onClick={(event) => {handleClick()}}
        onPointerOver={(event) => hover(true)}
        onPointerOut={(event) => hover(false)}>
        >
        <meshBasicMaterial color={hovered ? '#ff00b1' : color } opacity={opacity} side={THREE.DoubleSide} depthWrite={false} transparent />
          <shapeGeometry args={[shape]} />
        </mesh>
      })}
      </group>
    </>
  )

}

export default ThreeInteractiveSvg