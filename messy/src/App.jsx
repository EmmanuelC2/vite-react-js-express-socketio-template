import { Canvas, useFrame } from '@react-three/fiber';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');

const App = () => {
  

  /*Canvas>
        <mesh>
          <boxGeometry args={[2,2,2]} />
          <meshPhongMaterial />
        </mesh>

        <ambientLight intensity={0.1} />
        <directionalLight position={[0,0,5]} color="red"/> 

      </Canvas>
      */


  return (
    <>
      <p>Hello, World!</p>
    </>
  )
}

export default App