import * as THREE from "three";
import React, {
  Suspense,
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import { useFrame } from "react-three-fiber";
import {
  PerspectiveCamera,
  Environment,
  MeshDistortMaterial,
  ContactShadows,
} from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  projectsRef: MutableRefObject<HTMLElement>;
}

const AnimatedMaterial = a(MeshDistortMaterial);

const Scene = ({ darkMode, setDarkMode, projectsRef }: Props) => {
  const sphere = useRef(null);
  const light = useRef(null);
  const shadow = useRef(null);

  const [down, setDown] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    document.body.style.cursor = hovered ? "none" : "auto";
  }, [hovered]);

  useEffect(() => {
    ScrollTrigger.create({
      markers: true,
      id: "Projects",
      trigger: projectsRef.current,
      end: "bottom bottom",
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        t.kill();
      });
    };
  }, [progress]);

  useFrame((state) => {
    light.current.position.x = state.mouse.x * 20;
    light.current.position.y = state.mouse.y * 20;

    sphere.current.position.x = THREE.MathUtils.lerp(
      sphere.current.position.x,
      hovered ? state.mouse.x / 2 : 0,
      0.2
    );
    sphere.current.position.y = THREE.MathUtils.lerp(
      sphere.current.position.y,
      Math.sin(state.clock.elapsedTime / 1.5) / 6 +
        (hovered ? state.mouse.y / 2 : 0),
      0.2
    );
    shadow.current.position.y = map(progress, 0, 1, -5, -1.6);
  });

  const [{ wobble, coat, color, ambient, env }] = useSpring(
    {
      wobble: down ? 1.2 : hovered ? 1.05 : 1,
      coat: darkMode && !hovered ? 0.04 : 0.5,
      ambient: darkMode && !hovered ? 1.5 : 0.5,
      env: darkMode && !hovered ? 0.4 : 1,
      color: hovered ? "#E8B059" : darkMode ? "#202020" : "white",
      config: (n) =>
        n === "wobble" && hovered && { mass: 2, tension: 1000, friction: 10 },
    },
    [darkMode, hovered, down]
  );
  const map = (value, x1, y1, x2, y2) =>
    ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
        <a.ambientLight intensity={ambient} />
        <a.pointLight
          ref={light}
          position-z={-15}
          intensity={env}
          color="#F8C069"
        />
      </PerspectiveCamera>
      <Suspense fallback={null}>
        <a.mesh
          ref={sphere}
          //@ts-ignore
          scale={wobble.to((w) => [w, w, w])}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setDown(true)}
          onPointerUp={() => {
            setDown(false);
            setDarkMode(!darkMode);
          }}
        >
          <sphereBufferGeometry args={[1, 64, 64]} />
          <AnimatedMaterial
            color={color}
            envMapIntensity={env}
            clearcoat={coat}
            clearcoatRoughness={0}
            metalness={0.3}
          />
        </a.mesh>
        <Environment preset="lobby" />
        <ContactShadows
          ref={shadow}
          rotation={[Math.PI / 2, 0, 0]}
          opacity={darkMode ? 0.8 : 0.4}
          width={15}
          height={15}
          blur={2.5}
          far={5}
        />
      </Suspense>
    </>
  );
};

export default Scene;
