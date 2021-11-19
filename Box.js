import React, { useRef, useState } from "react";

export default function Box(props) {
  const mesh = useRef();

  return (
    <mesh
      {...props}
      ref={mesh}
      onClick={(e) => {
        props.setBoxSelected(mesh.current.position);
      }}
    >
      <boxGeometry args={[1.3, 1.2, 1]} />
      <meshStandardMaterial color={"gold"} />
    </mesh>
  );
}
