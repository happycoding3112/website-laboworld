import { Suspense, useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Atoms() {
  const group = useRef<THREE.Group>(null);

  const atoms = useMemo(() => {
    const colors = ["#10b981", "#f97316", "#fbbf24", "#3b82f6"];
    return Array.from({ length: 12 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4,
      ] as [number, number, number],
      color: colors[i % colors.length],
      size: 0.15 + Math.random() * 0.2,
      speed: 0.3 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
    }));
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const a = atoms[i];
      child.position.y = a.position[1] + Math.sin(state.clock.elapsedTime * a.speed + a.offset) * 0.5;
      child.position.x = a.position[0] + Math.cos(state.clock.elapsedTime * a.speed * 0.5 + a.offset) * 0.3;
    });
  });

  return (
    <group ref={group}>
      {atoms.map((a, i) => (
        <mesh key={i} position={a.position}>
          <sphereGeometry args={[a.size, 24, 24]} />
          <meshStandardMaterial
            color={a.color}
            emissive={a.color}
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export function FloatingAtoms3D({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div className={className}>
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1} />
          <Atoms />
        </Canvas>
      </Suspense>
    </div>
  );
}
