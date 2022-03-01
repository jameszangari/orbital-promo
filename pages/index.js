import Head from "next/head";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, useTexture } from "@react-three/drei";
import { LayerMaterial, Base, Noise, Depth, Fresnel, Texture } from "lamina";
import Title from './components/Title.js'
import Time from './components/Time.js'
import Creators from './components/Creators.js'

const Planet = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() / 1.6;
    }
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
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <div className='absolute top-0 left-0 z-10grid grid-rows-4 h-screen w-screen sm:grid-cols-2 sm:grid-rows-3 max-w-6xl mx-auto my-0'>
          <Title/>
          <Time />
          <Creators />
        </div>
        <Canvas
          dpr={[1, 2]}
          gl={{ antialias: false }}
          camera={{ fov: 50, position: [0, 0, 20] }}
          style={{
            height: "100vh",
            width: "100vw",
            position: "absolute",
            top: 0,
          }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <pointLight position={[100, 100, 100]} />
            <Planet />
            <Stars/>
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}
