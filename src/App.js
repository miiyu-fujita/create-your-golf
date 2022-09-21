import React, { Suspense, useRef } from "react";
import './App.scss';

// Components 
import { Html, OrbitControls, Scroll, ScrollControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader, useFrame, Canvas} from "@react-three/fiber";
import Header from "./components/Header";
import { Model } from "./Scene";
import { Card, CardHeader, Grid, Divider, CardContent, Typography, CardMedia, Button, createTheme, ThemeProvider} from '@mui/material';
import { purple, yellow } from '@mui/material/colors';


const date = new Date();
const year = date.getFullYear()

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#fff'
    },
  },
});


const GreenCard = () => {
  return (
    <Card sx={{maxWidth: 300}}>
    <CardMedia 
      style = {{height:250}}
      component="img"
      image= {require('./images/green.jpg')}
      alt= {'green golf ball'}
    />
    <Divider />
    <CardContent>
      <Typography variant="h5" align="left" gutterBottom>
        #BDFF00
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        "Green" x6
      </Typography>
      <Typography variant="p" align="left">
        $ 20.00
      </Typography>
    </CardContent>
  </Card>
  )
}

const WhiteCard = () => {
  return (
    <Card sx={{maxWidth: 300}}>
    <CardMedia 
      style = {{height:250}}
      component="img"
      image= {require('./images/white.jpg')}
      alt= {'green golf ball'}
    />
    <Divider />
    <CardContent>
      <Typography variant="h5" align="left" gutterBottom>
        #FFFFFF
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        "White" x6
      </Typography>
      <Typography variant="p" align="left">
        $ 20.00
      </Typography>
    </CardContent>
  </Card>
  )
}

const PinkCard = () => {
  return (
    <Card sx={{maxWidth: 300}}>
    <CardMedia 
      style = {{height:250}}
      component="img"
      image= {require('./images/pink.jpg')}
      alt= {'green golf ball'}
    />
    <Divider />
    <CardContent>
      <Typography variant="h5" align="left" gutterBottom>
        #FA00FF
      </Typography>
      <Typography variant="h6" align="left" gutterBottom>
        "Pink" x6
      </Typography>
      <Typography variant="p" align="left">
        $ 20.00
      </Typography>
    </CardContent>
  </Card>
  )
}

const ColorGrid = () => {
  return (
    <Grid container spacing={9}>
      <Grid item md={4}>
        <GreenCard />
      </Grid>
      <Grid item md={4}>
        <WhiteCard />
      </Grid>
      <Grid item md={4}>
        <PinkCard />
      </Grid>
    </Grid>
  )
}


function App() {
  const gltf = useLoader(GLTFLoader, '/scene.gltf')


  return (
    <>

      <Canvas 
        concurrent="true"
        colormanagement="true"
        camera={{ position: [0, 0, 120], fov: 70}}
      >
      <ScrollControls
        pages={5}
        distance={1}
        damping={6}
        
      >
      
      <Scroll>
        <ambientLight />
        <Suspense fallback={null}>
          <Model scale={[50, 50, 50]} position={[60, 0, -20]}/>
          {/* <OrbitControls /> */}
          {/* <Model scale={[20, 20, 20]} position={[0, -420, -20]}/>
          <Model scale={[20, 20, 20]} position={[-100, -420, -20]}/> */}
          {/* <Model scale={[20, 20, 20]} position={[100, -420, -20]}/> */}
          {/* Add customized models at specific positions here to fit onto 3rd page */}
        </Suspense>
      </Scroll>
      
      
      <Scroll html fullscreen="true">
      <Header />
        <h1 className='head-title'> Create Your Golf </h1>
        <p className='head-subtitle'>Personalized golf balls, just for you.</p>
        <h1 className='colors-title' style={{ top: '100vh' }}>Choose from our three base colors ... </h1>
        
        <div className='color-options'>
          <ColorGrid className='color-grid'/>
        </div>

        <h1 className='customize-title' style={{ top: '150vh' }}>Customize your product to recognize it anywhere.</h1>
        <div className='custom-options'>

        </div>
        <div className='testimonial-section'>
          <p className='testimonial-text'>
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.”
          </p>
          <p className='testimonial-giver'>
            - A Person
          </p>
        </div>
        <div className='cta-section'>
          <h3 className='cta-text'>
          Ready to get started? <br />
          <ThemeProvider theme={darkTheme}>
          <Button style={{color: 'white'}} className='cta-button' variant='contained' disableElevation>
            <p className='cta-button-text' style={{color: 'black'}}><strong>CREATE</strong></p>
          </Button>
          </ThemeProvider>  
          </h3>
          
          <p className='cta-message'>
          Note that this is not a real service. 
          This is a personal project I worked on to try and design a landing page, using some tools I thought were cool. 
          I also like and know people who love golf. 
          </p>
          <p className='copyright'>Copyright {year}</p>
        </div>
      </Scroll>
      </ScrollControls>

      </Canvas>
      
    </>
  );
}

export default App;

