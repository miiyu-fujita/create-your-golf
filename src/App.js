import React, { Suspense } from "react";
import './App.scss';

// Components 
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import Header from "./components/Header";

// R3F
import { Canvas, useFrame } from "@react-three/fiber";

function Model() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf');
  return ( 
  <Suspense>
    <primitive object={gltf.scene} />
  </Suspense>)
}



function App() {
  return (
    <>
      
      <Canvas 
        concurrent
        colorManagement
        camera={{ position: [0, 0, 120], fov: 70}}
      >
      <ScrollControls
        pages={4}
        distance={1}
        damping={6}
        
      >
      
      <Scroll>
        
      </Scroll>
      <Scroll html fullscreen>
      <Header />
        <h1 className='head-title'> Create Your Golf </h1>
        <h1 className='colors-title' style={{ top: '100vh' }}>Choose from our three base colors ... </h1>
        <h1 className='customize-title' style={{ top: '200vh' }}>Customize your product to recognize it anywhere.</h1>
        <h1  className='test-cta-title' style={{ top: '300vh' }}>CTA</h1>
      </Scroll>
      </ScrollControls>

      </Canvas>
    </>
  );
}

export default App;
