"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function EarthCircle() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Configuração básica do Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 2.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    canvasRef.current.appendChild(renderer.domElement);

    // Adicionando luz à cena
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Luz suave
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Criando o planeta
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    const textureLoader = new THREE.TextureLoader();

    // Carregando a textura da Terra
    const earthTexture = textureLoader.load(
      "/images/earth.jpg", // Substitua pelo caminho correto da textura
      () => {
        renderer.render(scene, camera); // Render após carregar
      }
    );

    const nightTexture = textureLoader.load("/images/earth.jpg");
    const material = new THREE.MeshStandardMaterial({
    map: earthTexture,
    emissiveMap: nightTexture, // Usa a textura noturna como emissiva
    emissive: new THREE.Color(0xffffff), // Luz branca
    emissiveIntensity: 1.0,
      }
    );
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animação
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotação contínua
      sphere.rotation.y += 0.005;
      sphere.rotation.x += scrollY * 0.0001;
      sphere.scale.set(1 + scrollY * 0.001, 1 + scrollY * 0.001, 1 + scrollY * 0.001);

      renderer.render(scene, camera);
    };
    animate();
    // Função para sincronizar com o scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      // Mapear o scroll para o movimento vertical
      const mappedY = -((scrollY / maxScroll) * 10); // Ajustar "10" para um movimento mais longo/curto
      sphere.position.y = mappedY;
      // Mapear o scroll para o movimento vertical
      // Ajuste os valores conforme necessário para desacelerar ou limitar o movimento
      sphere.position.y = -scrollY * 0.002; // Multiplicador ajusta a sensibilidade
    };

    // Ouvir o evento de scroll
    window.addEventListener("scroll", handleScroll);
    // Redimensionamento responsivo
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
    ref={canvasRef}
    className="absolute inset-0 z-10" // Priorize o canvas
  />
  );
}
