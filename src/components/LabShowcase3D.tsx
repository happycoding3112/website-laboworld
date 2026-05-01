import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

type SceneVariant = "hero" | "panel";
type Point3D = [number, number, number];

function Bond({ start, end, color = "#94a3b8", radius = 0.025 }: { start: Point3D; end: Point3D; color?: string; radius?: number }) {
  const startVector = new THREE.Vector3(...start);
  const endVector = new THREE.Vector3(...end);
  const midpoint = startVector.clone().add(endVector).multiplyScalar(0.5);
  const length = startVector.distanceTo(endVector);
  const direction = endVector.clone().sub(startVector).normalize();
  const quaternion = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction);

  return (
    <mesh position={midpoint.toArray()} quaternion={quaternion}>
      <cylinderGeometry args={[radius, radius, length, 12]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.08} roughness={0.32} metalness={0.15} />
    </mesh>
  );
}

function TestTube({ liquidColor, delay = 0 }: { liquidColor: string; delay?: number }) {
  const liquidRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!liquidRef.current) return;
    const wave = Math.sin(state.clock.elapsedTime * 1.5 + delay) * 0.035;
    liquidRef.current.scale.y = 1 + wave;
    liquidRef.current.position.y = -0.45 + wave * 0.35;
  });

  return (
    <group>
      <mesh>
        <cylinderGeometry args={[0.13, 0.13, 1.38, 32, 1, true]} />
        <meshStandardMaterial color="#dbeafe" transparent opacity={0.23} roughness={0.05} metalness={0.02} />
      </mesh>
      <mesh ref={liquidRef} position={[0, -0.45, 0]}>
        <cylinderGeometry args={[0.105, 0.105, 0.55, 28]} />
        <meshStandardMaterial color={liquidColor} emissive={liquidColor} emissiveIntensity={0.22} transparent opacity={0.78} roughness={0.18} />
      </mesh>
      <mesh position={[0, -0.69, 0]}>
        <sphereGeometry args={[0.105, 28, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2]} />
        <meshStandardMaterial color={liquidColor} emissive={liquidColor} emissiveIntensity={0.2} transparent opacity={0.78} roughness={0.18} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.7, 0]}>
        <torusGeometry args={[0.13, 0.012, 8, 32]} />
        <meshStandardMaterial color="#eff6ff" transparent opacity={0.4} roughness={0.1} />
      </mesh>
    </group>
  );
}

function TestTubeRack() {
  const rackRef = useRef<THREE.Group>(null);
  const tubeColors = ["#10b981", "#f97316", "#fbbf24", "#38bdf8", "#10b981"];

  useFrame((state) => {
    if (!rackRef.current) return;
    rackRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.55) * 0.025;
  });

  return (
    <group ref={rackRef} position={[-2.35, -0.45, 0]} rotation={[0.05, 0.25, -0.08]}>
      <mesh position={[0, -0.42, 0]}>
        <boxGeometry args={[1.85, 0.12, 0.36]} />
        <meshStandardMaterial color="#334155" roughness={0.38} metalness={0.25} />
      </mesh>
      <mesh position={[0, 0.18, 0]}>
        <boxGeometry args={[1.9, 0.08, 0.42]} />
        <meshStandardMaterial color="#475569" roughness={0.32} metalness={0.28} />
      </mesh>
      {tubeColors.map((liquidColor, index) => (
        <group key={liquidColor + index} position={[-0.72 + index * 0.36, 0.05, 0]}>
          <TestTube liquidColor={liquidColor} delay={index * 0.7} />
        </group>
      ))}
    </group>
  );
}

function Beaker() {
  const groupRef = useRef<THREE.Group>(null);
  const bubblePositions = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => {
        const angle = index * 2.399963;
        const distance = 0.12 + (index % 4) * 0.1;
        return {
          position: [Math.cos(angle) * distance, -0.5 + (index % 5) * 0.2, Math.sin(angle) * distance] as Point3D,
          size: 0.025 + (index % 3) * 0.008,
        };
      }),
    [],
  );

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.35) * 0.12;
  });

  return (
    <group ref={groupRef} position={[0.05, -0.5, 0.1]} rotation={[0.02, -0.35, 0]}>
      <mesh>
        <cylinderGeometry args={[0.72, 0.58, 1.65, 48, 1, true]} />
        <meshStandardMaterial color="#dbeafe" transparent opacity={0.22} roughness={0.06} metalness={0.02} />
      </mesh>
      <mesh position={[0, -0.43, 0]}>
        <cylinderGeometry args={[0.56, 0.5, 0.68, 48]} />
        <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.14} transparent opacity={0.5} roughness={0.22} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.83, 0]}>
        <torusGeometry args={[0.72, 0.018, 12, 64]} />
        <meshStandardMaterial color="#f8fafc" transparent opacity={0.42} roughness={0.08} />
      </mesh>
      <mesh position={[0, -0.84, 0]}>
        <cylinderGeometry args={[0.58, 0.58, 0.035, 48]} />
        <meshStandardMaterial color="#e2e8f0" transparent opacity={0.28} roughness={0.15} />
      </mesh>
      {bubblePositions.map((bubble, index) => (
        <mesh key={index} position={bubble.position}>
          <sphereGeometry args={[bubble.size, 16, 16]} />
          <meshStandardMaterial color="#f8fafc" emissive="#38bdf8" emissiveIntensity={0.25} transparent opacity={0.75} roughness={0.15} />
        </mesh>
      ))}
    </group>
  );
}

function MolecularHelix() {
  const helixRef = useRef<THREE.Group>(null);
  const points = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const angle = index * 0.72;
        return [Math.cos(angle) * 0.5, -1.05 + index * 0.13, Math.sin(angle) * 0.5] as Point3D;
      }),
    [],
  );

  useFrame((_, delta) => {
    if (!helixRef.current) return;
    helixRef.current.rotation.y += delta * 0.22;
    helixRef.current.rotation.x = Math.sin(performance.now() * 0.0004) * 0.12;
  });

  return (
    <group ref={helixRef} position={[1.95, -0.1, -0.1]} rotation={[0.35, 0, -0.2]}>
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <sphereGeometry args={[index % 3 === 0 ? 0.11 : 0.085, 24, 24]} />
          <meshStandardMaterial
            color={index % 3 === 0 ? "#f97316" : index % 2 === 0 ? "#10b981" : "#fbbf24"}
            emissive={index % 3 === 0 ? "#f97316" : "#10b981"}
            emissiveIntensity={0.2}
            roughness={0.28}
            metalness={0.24}
          />
        </mesh>
      ))}
      {points.slice(0, -1).map((point, index) => (
        <Bond key={index} start={point} end={points[index + 1]} color="#cbd5e1" radius={0.018} />
      ))}
      {points.slice(0, -4).map((point, index) => (index % 3 === 0 ? <Bond key={`cross-${index}`} start={point} end={points[index + 4]} color="#10b981" radius={0.012} /> : null))}
    </group>
  );
}

function AnimatedRings({ variant }: { variant: SceneVariant }) {
  const ringRefs = useRef<THREE.Mesh[]>([]);
  const ringCount = variant === "hero" ? 4 : 3;

  useFrame((state, delta) => {
    ringRefs.current.forEach((ring, index) => {
      if (!ring) return;
      ring.rotation.z += delta * (0.16 + index * 0.035);
      ring.rotation.x = Math.sin(state.clock.elapsedTime * 0.35 + index) * 0.28;
    });
  });

  return (
    <group position={[0.18, -0.12, -0.28]}>
      {Array.from({ length: ringCount }, (_, index) => (
        <mesh
          key={index}
          ref={(ring) => {
            if (ring) ringRefs.current[index] = ring;
          }}
          rotation={[Math.PI / 2.6, 0, index * 0.6]}
          scale={[1 + index * 0.28, 1 + index * 0.28, 1]}
        >
          <torusGeometry args={[1.58, 0.01, 8, 120]} />
          <meshStandardMaterial color={index % 2 === 0 ? "#10b981" : "#f97316"} emissive={index % 2 === 0 ? "#10b981" : "#f97316"} emissiveIntensity={0.3} transparent opacity={0.45} />
        </mesh>
      ))}
    </group>
  );
}

function FloatingParticles({ variant }: { variant: SceneVariant }) {
  const particlesRef = useRef<THREE.Group>(null);
  const particles = useMemo(() => {
    const particleCount = variant === "hero" ? 54 : 34;
    const palette = ["#10b981", "#f97316", "#fbbf24", "#38bdf8"];

    return Array.from({ length: particleCount }, (_, index) => {
      const angle = index * 2.399963;
      const layer = (index % 9) / 9;
      const radius = 1.7 + layer * 2.4;
      return {
        position: [Math.cos(angle) * radius, -1.35 + layer * 3.2, Math.sin(angle) * (1.3 + layer * 1.1)] as Point3D,
        size: 0.022 + (index % 4) * 0.008,
        color: palette[index % palette.length],
      };
    });
  }, [variant]);

  useFrame((state) => {
    if (!particlesRef.current) return;
    particlesRef.current.rotation.y = state.clock.elapsedTime * 0.035;
    particlesRef.current.children.forEach((particle, index) => {
      particle.position.y += Math.sin(state.clock.elapsedTime * 0.85 + index) * 0.0018;
    });
  });

  return (
    <group ref={particlesRef}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[particle.size, 12, 12]} />
          <meshStandardMaterial color={particle.color} emissive={particle.color} emissiveIntensity={0.55} transparent opacity={0.82} />
        </mesh>
      ))}
    </group>
  );
}

function LabScene({ pointer, variant }: { pointer: { x: number; y: number }; variant: SceneVariant }) {
  const sceneRef = useRef<THREE.Group>(null);
  const sceneScale = variant === "hero" ? 1 : 0.88;

  useFrame((state, delta) => {
    if (!sceneRef.current) return;
    sceneRef.current.rotation.y += delta * 0.035;
    sceneRef.current.rotation.x = THREE.MathUtils.lerp(sceneRef.current.rotation.x, pointer.y * 0.09, 0.035);
    sceneRef.current.rotation.z = THREE.MathUtils.lerp(sceneRef.current.rotation.z, -pointer.x * 0.045, 0.035);
    sceneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.48) * 0.055;
  });

  return (
    <group ref={sceneRef} scale={sceneScale} position={[0, 0, 0]}>
      <AnimatedRings variant={variant} />
      <TestTubeRack />
      <Beaker />
      <MolecularHelix />
      <FloatingParticles variant={variant} />
    </group>
  );
}

export function LabShowcase3D({ className = "", variant = "hero" }: { className?: string; variant?: SceneVariant }) {
  const [mounted, setMounted] = useState(false);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);

    const handlePointerMove = (event: PointerEvent) => {
      setPointer({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: (event.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  if (!mounted) return null;

  return (
    <div className={className} aria-hidden="true">
      <Suspense fallback={null}>
        <Canvas camera={{ position: [0, 0.25, 6.8], fov: variant === "hero" ? 44 : 48 }} dpr={[1, 1.6]} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.72} />
          <directionalLight position={[3, 4, 5]} intensity={1.65} color="#f8fafc" />
          <pointLight position={[-3.5, 1.8, 3]} intensity={1.4} color="#10b981" />
          <pointLight position={[3.5, -1.3, 2.6]} intensity={1.05} color="#f97316" />
          <LabScene pointer={pointer} variant={variant} />
        </Canvas>
      </Suspense>
    </div>
  );
}
