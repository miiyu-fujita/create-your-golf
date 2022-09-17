import React, { Suspense, useRef } from "react";
import './App.scss';

// Components 
import { Html, Scroll, ScrollControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame, Canvas} from "@react-three/fiber";
import Header from "./components/Header";
import { Model } from "./Scene";




function App() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')


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
        {/* Add threejs golf ball model here */}
        <ambientLight />
        <Suspense fallback={null}>
        <Model scale={[50, 50, 50]} position={[60, 0, -20]}/>
        </Suspense>
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
