import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Web3DShowcase({ compact = false }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, compact ? 0.4 : 0.2, compact ? 7.2 : 6.3);

    const group = new THREE.Group();
    scene.add(group);

    const coreGeometry = new THREE.IcosahedronGeometry(compact ? 1.35 : 1.7, 2);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x7dd3fc,
      roughness: 0.28,
      metalness: 0.55,
      transparent: true,
      opacity: 0.94,
      emissive: 0x0f4c81,
      emissiveIntensity: 0.32,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const wire = new THREE.Mesh(
      coreGeometry,
      new THREE.MeshBasicMaterial({
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      }),
    );
    wire.scale.setScalar(1.012);
    group.add(wire);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.36,
      side: THREE.DoubleSide,
    });

    const rings = [
      { radius: compact ? 1.95 : 2.48, tube: 0.01, x: Math.PI / 2.6, y: 0.18 },
      { radius: compact ? 2.2 : 2.78, tube: 0.012, x: Math.PI / 2, y: Math.PI / 3 },
      { radius: compact ? 2.45 : 3.12, tube: 0.008, x: Math.PI / 1.7, y: -Math.PI / 5 },
    ].map((ring) => {
      const mesh = new THREE.Mesh(
        new THREE.TorusGeometry(ring.radius, ring.tube, 12, 160),
        ringMaterial.clone(),
      );
      mesh.rotation.set(ring.x, ring.y, 0);
      group.add(mesh);
      return mesh;
    });

    const nodeGeometry = new THREE.SphereGeometry(compact ? 0.045 : 0.058, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xe0f2fe });
    const nodes = [];
    const nodeCount = compact ? 26 : 42;

    for (let index = 0; index < nodeCount; index += 1) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const angle = (index / nodeCount) * Math.PI * 2;
      const radius = compact ? 2.15 + (index % 3) * 0.22 : 2.85 + (index % 4) * 0.18;
      node.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 1.7) * (compact ? 0.72 : 0.95),
        Math.sin(angle) * radius,
      );
      nodes.push({ node, speed: 0.18 + (index % 5) * 0.035, offset: angle });
      group.add(node);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = compact ? 120 : 210;
    const positions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * (compact ? 8 : 11);
      positions[index * 3 + 1] = (Math.random() - 0.5) * (compact ? 4.2 : 5.5);
      positions[index * 3 + 2] = (Math.random() - 0.5) * (compact ? 6 : 8);
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particlesGeometry,
      new THREE.PointsMaterial({
        color: 0xbdefff,
        size: compact ? 0.018 : 0.022,
        transparent: true,
        opacity: 0.55,
      }),
    );
    scene.add(particles);

    const keyLight = new THREE.PointLight(0x7dd3fc, 7.5, 18);
    keyLight.position.set(3.5, 3.5, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0x818cf8, 5.5, 16);
    fillLight.position.set(-4, -2.4, 4);
    scene.add(fillLight);

    const resize = () => {
      const width = Math.max(host.clientWidth, 1);
      const height = Math.max(host.clientHeight, 1);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = elapsed * 0.18;
      group.rotation.x = Math.sin(elapsed * 0.35) * 0.08;
      core.rotation.y = elapsed * 0.34;
      wire.rotation.y = -elapsed * 0.2;
      particles.rotation.y = elapsed * 0.025;
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.08 + index * 0.025);
      });
      nodes.forEach(({ node, speed, offset }) => {
        node.position.y += Math.sin(elapsed * speed + offset) * 0.0018;
      });
      renderer.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      host.removeChild(renderer.domElement);
      renderer.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      wire.material.dispose();
      rings.forEach((ring) => {
        ring.geometry.dispose();
        ring.material.dispose();
      });
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      particlesGeometry.dispose();
      particles.material.dispose();
    };
  }, [compact]);

  return <div ref={hostRef} className="web3d-showcase" aria-hidden="true" />;
}
