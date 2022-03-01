import Head from "next/head";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Logo from "./components/Logo.js";
import Planet from "./components/Planet.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Logo className={"m-auto block pt-4"} />
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
            <Stars fade={true} />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Suspense>
        </Canvas>
      </main>
    </>
  );
}
