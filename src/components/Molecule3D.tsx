import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type AtomProps = { position: [number, number, number]; color: string; size?: number };

function Atom({ position, color, size = 0.5 }: AtomProps) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        roughness={0.3}
        metalness={0.4}
        emissive={color}
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function Bond({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const ref = useRef<THREE.Mesh>(null);
  const startV = new THREE.Vector3(...start);
  const endV = new THREE.Vector3(...end);
  const mid = startV.clone().add(endV).multiplyScalar(0.5);
  const length = startV.distanceTo(endV);
  const dir = endV.clone().sub(startV).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);

  return (
    <mesh ref={ref} position={mid.toArray()} quaternion={quaternion}>
      <cylinderGeometry args={[0.08, 0.08, length, 16]} />
      <meshStandardMaterial color="#cccccc" roughness={0.4} metalness={0.3} />
    </mesh>
  );
}

function MoleculeGroup({ mouse }: { mouse: { x: number; y: number } }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.3;
    group.current.rotation.x += (mouse.y * 0.3 - group.current.rotation.x) * 0.05;
  });

  // Benzene ring (6 carbons in hexagon) + glowing center
  const radius = 1.6;
  const carbons: [number, number, number][] = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2;
    return [Math.cos(a) * radius, Math.sin(a) * radius, 0];
  });

  return (
    <group ref={group}>
      {carbons.map((pos, i) => (
        <Atom key={`c${i}`} position={pos} color={i % 2 === 0 ? "#10b981" : "#f97316"} size={0.45} />
      ))}
      {carbons.map((pos, i) => (
        <Bond key={`b${i}`} start={pos} end={carbons[(i + 1) % 6]} />
      ))}
      <Atom position={[0, 0, 0]} color="#fbbf24" size={0.35} />
    </group>
  );
}

export function Molecule3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} />
          <pointLight position={[-5, -3, 2]} intensity={0.6} color="#f97316" />
          <MoleculeGroup mouse={mouse} />
        </Canvas>
      </Suspense>
    </div>
  );
}
