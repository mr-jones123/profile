"use client";

import { useEffect, useRef } from "react";

/**
 * Night Observatory starfield — the page's signature element.
 *
 * One instanced THREE.Points draw call (~1.1k soft round sprites), custom GLSL
 * for twinkle + depth parallax. Loaded via next/dynamic ssr:false so three.js
 * never touches the critical bundle. Disabled under prefers-reduced-motion.
 */
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let cleanup = () => {};

    import("three").then((THREE) => {
      if (disposed || !canvasRef.current) return;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(58, 1, 0.1, 120);
      camera.position.z = 14;

      const COUNT = 1100;
      const positions = new Float32Array(COUNT * 3);
      const seeds = new Float32Array(COUNT);
      const tints = new Float32Array(COUNT);

      for (let i = 0; i < COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 48;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 27;
        positions[i * 3 + 2] = 2 - Math.random() * 44; // 2 … -42
        seeds[i] = Math.random() * Math.PI * 2;

        const roll = Math.random();
        // 0 violet-bone · 1 magenta · 2 cyan · 3 void-red — Dark Star tints
        tints[i] = roll > 0.9 ? 1 : roll > 0.8 ? 2 : roll > 0.77 ? 3 : 0;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("aSeed", new THREE.BufferAttribute(seeds, 1));
      geometry.setAttribute("aTint", new THREE.BufferAttribute(tints, 1));

      const material = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uTime: { value: 0 },
          uScroll: { value: 0 },
          uVel: { value: 0 },
          uSize: { value: 34 },
          uPixelRatio: { value: Math.min(window.devicePixelRatio, 1.75) },
          uBone: { value: new THREE.Color("#b9aed6") },
          uBrass: { value: new THREE.Color("#e14fd2") },
          uBlue: { value: new THREE.Color("#35d6ff") },
          uRed: { value: new THREE.Color("#ff3b47") },
        },
        vertexShader: /* glsl */ `
          attribute float aSeed;
          attribute float aTint;
          uniform float uTime;
          uniform float uScroll;
          uniform float uVel;
          uniform float uSize;
          uniform float uPixelRatio;
          varying float vTwinkle;
          varying float vTint;

          void main() {
            vec3 p = position;
            // Depth parallax: near stars track scroll faster than far ones
            float depthFactor = 0.05 + (p.z + 44.0) * 0.004;
            p.y = mod(p.y - uScroll * depthFactor + 13.5, 27.0) - 13.5;
            p.x += sin(uTime * 0.05 + aSeed) * 0.45;

            vec4 mv = modelViewMatrix * vec4(p, 1.0);
            gl_Position = projectionMatrix * mv;

            vTwinkle = 0.7 + 0.3 * sin(uTime * (0.5 + fract(aSeed) * 0.8) + aSeed * 7.0);
            vTint = aTint;
            gl_PointSize = uSize * uPixelRatio * (0.55 + vTwinkle * 0.45)
              * (1.0 + uVel * 0.5) / max(-mv.z, 1.0) * 24.0;
          }
        `,
        fragmentShader: /* glsl */ `
          precision mediump float;
          uniform vec3 uBone;
          uniform vec3 uBrass;
          uniform vec3 uBlue;
          uniform vec3 uRed;
          varying float vTwinkle;
          varying float vTint;

          void main() {
            float d = length(gl_PointCoord - 0.5);
            float alpha = smoothstep(0.5, 0.04, d);
            vec3 color = vTint < 0.5 ? uBone : vTint < 1.5 ? uBrass : vTint < 2.5 ? uBlue : uRed;
            gl_FragColor = vec4(color, alpha * vTwinkle);
          }
        `,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      // Pointer parallax — eased group tilt, never fights scroll
      const pointer = { x: 0, y: 0 };
      const onPointerMove = (event: PointerEvent) => {
        pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
        pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
      };

      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight, false);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        material.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 1.75);
      };

      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("resize", onResize);
      onResize();
      let lastScrollY = window.scrollY;
      let rafId = 0;
      let elapsed = 0;
      let prevMs = performance.now();

      const frame = (ms: number) => {
        elapsed += Math.min(ms - prevMs, 50) / 1000;
        prevMs = ms;
        const y = window.scrollY;
        const rawVel = Math.min(Math.abs(y - lastScrollY) / 32, 1);
        lastScrollY = y;
        const u = material.uniforms;
        u.uTime.value = elapsed;
        u.uScroll.value = y * 0.004;
        u.uVel.value += (rawVel - u.uVel.value) * 0.08;

        points.rotation.y += (pointer.x * 0.06 - points.rotation.y) * 0.03;
        points.rotation.x += (-pointer.y * 0.045 - points.rotation.x) * 0.03;

        renderer.render(scene, camera);
        rafId = requestAnimationFrame(frame);
      };
      rafId = requestAnimationFrame(frame);

      cleanup = () => {
        cancelAnimationFrame(rafId);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("resize", onResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    });

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
