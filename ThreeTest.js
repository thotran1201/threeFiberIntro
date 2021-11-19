import Rect, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import Box from "./Box";
import "./three.css";

export default function ThreeTest() {
  const [selectedBoxPos, setSelectedBoxPosition] = useState({
    x: 0,
    y: 0,
    z: 0
  });
  const { stageRotation } = useSpring({ stageRotation: -selectedBoxPos.x });

  return (
    <div id="threeContent">
      <Canvas>
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-8, -2, -2]} />

        <animated.group rotation-y={stageRotation}>
          <Box position={[1.2, 1, 0]} setBoxSelected={setSelectedBoxPosition} />
          <Box position={[-1, 1, 0]} setBoxSelected={setSelectedBoxPosition} />

          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -1, 0]}
            scale={[200, 20, 20]}
          >
            <planeGeometry />
            <meshStandardMaterial color={"#990000"} />
          </mesh>
        </animated.group>
      </Canvas>
    </div>
  );
}
