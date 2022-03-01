import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, useTexture } from "@react-three/drei";
import { LayerMaterial, Base, Noise, Depth, Fresnel, Texture } from "lamina";

export default function Planet() {
  const ref = useRef();
  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() / 1.6;
  });
  return (
    <Sphere ref={ref} scale={2}>
      <ambientLight intensity={1} />
      <pointLight position={[100, 100, 100]} />
      <LayerMaterial>
        <Base color="#D33CE7" valpha={1} mode="normal" />
        <Noise colorA="#5B2CCB" colorB="#000000" alpha={1} mode="lighten" />
        <Texture map={useTexture("/volcanic.png")} alpha={0.75} />
        {/* <Texture map={texture[1]} alpha={0.5} /> */}
      </LayerMaterial>
    </Sphere>
  );
}
