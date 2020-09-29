import React, {useRef, useMemo, useState} from "react";
import classes from "./ProjectsSection.module.css";
import { Canvas, useFrame} from "react-three-fiber";
import { softShadows, OrbitControls, Html } from "drei";
import * as THREE from 'three';
import babyflix from "../../../media/babyflix.png";
import sunset from "../../../media/sunset.png";
import setu from "../../../media/sikshasetu.png";


const Box = ({pos,sizing,color,url}) => {
  const mesh = useRef(null);
  const [active, setActive] = useState(false);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  const texture = useMemo(() => new THREE.TextureLoader().load(url));
  return (
    <mesh
    castShadow
    position={pos}
    ref={mesh}
    // scale={active ? [4, 2, 1] : sizing}
    onClick={(e) => setActive(!active)}>
      <boxBufferGeometry attach='geometry' args={sizing} />
      <meshStandardMaterial attact='material' color={color} map={texture}/>
      <Html scaleFactor={10}>
          <div className={classes.Pamplate}>
            WebSite
          </div>
        </Html>
    </mesh>
  );
}

function ProjectsSection (props) {
  if(props.isActive) {
    softShadows()
    return (
      <>
        <Canvas
        shadowMap
        colorManagment
        camera={{position : [1,1,10], fov:60}}>
        <ambientLight intensity={0.3}/>
        <directionalLight
          castShadow
          position={[0,10,0]}
          intensity={1.1}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10,0,-20]} intensity={0.5} />
        <pointLight position={[0,-10,0]} intensity={1.5} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
            <planeBufferGeometry attach="geometry" args={[100,100]} />
            <shadowMaterial attact='material' opacity={0.3}/>
          </mesh>
        </group>

          <Box pos={[-5,1,3]} sizing={[2,1,0.5]} color={"white"} url={setu}/>
          <Box pos={[1,1,3]} sizing={[4,2,0.5]} color={"white"} url={babyflix}/>
          <Box pos={[5,1,3]} sizing={[2,1,0.5]} color={"white"} url={sunset}/>
          <OrbitControls />
        </Canvas>
      </>
    )
  } else {
    return null;
  }

}

export default ProjectsSection;
