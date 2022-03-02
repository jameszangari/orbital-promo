import Head from "next/head";
import MediaQuery from "react-responsive";
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Sphere, useTexture } from "@react-three/drei";
import { LayerMaterial, Base, Noise, Depth, Fresnel, Texture } from "lamina";
import Title from "./components/Title.js";
import Time from "./components/Time.js";
import Creators from "./components/Creators.js";

const Planet = () => {
  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() / 1.6;
    }
  });
  return (
    <>
      <MediaQuery minWidth={640}>
        <Sphere ref={ref} scale={2} position={[0, 0, 0]}>
          <ambientLight intensity={1} />
          <pointLight position={[100, 100, 100]} />
          <LayerMaterial>
            <Base color="#D33CE7" valpha={1} mode="normal" />
            <Noise colorA="#5B2CCB" colorB="#000000" alpha={1} mode="lighten" />
            <Texture map={useTexture("/volcanic.png")} alpha={0.75} />
            <Texture map={useTexture("/clouds.png")} alpha={0.5} />
          </LayerMaterial>
        </Sphere>
      </MediaQuery>
      <MediaQuery maxWidth={641}>
        <Sphere ref={ref} scale={2} position={[0, 2, 0]}>
          <ambientLight intensity={1} />
          <pointLight position={[100, 100, 100]} />
          <LayerMaterial>
            <Base color="#D33CE7" valpha={1} mode="normal" />
            <Noise colorA="#5B2CCB" colorB="#000000" alpha={1} mode="lighten" />
            <Texture map={useTexture("/volcanic.png")} alpha={0.75} />
            <Texture map={useTexture("/clouds.png")} alpha={0.5} />
          </LayerMaterial>
        </Sphere>
      </MediaQuery>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Krona+One&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main>
        <div className="z-10 grid grid-rows-4 h-screen w-screen sm:grid-cols-2 sm:grid-rows-3 max-w-6xl mx-auto my-0">
          <Title />
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
            <Planet />
            <Stars
              radius={100} // Radius of the inner sphere (default=100)
              depth={50} // Depth of area where stars should fit (default=50)
              count={5000} // Amount of stars (default=5000)
              factor={4} // Size factor (default=4)
              saturation={0} // Saturation 0-1 (default=0)
              fade={false} // Faded dots (default=false)
            />
            {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}
