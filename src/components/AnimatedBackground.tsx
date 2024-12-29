'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: false,
      powerPreference: 'high-performance'
    });
    const clock = new THREE.Clock();

    // Detect if device is mobile
    const isMobile = window.innerWidth <= 768;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector2() },
        u_mouse: { value: new THREE.Vector2() },
        u_scale: { value: isMobile ? 0.5 : 1.0 },
        colorA: { value: new THREE.Vector3(0.1, 0.3, 0.9) },
        colorB: { value: new THREE.Vector3(0.8, 0.2, 0.8) },
        colorC: { value: new THREE.Vector3(0.3, 0.1, 0.6) },
        colorD: { value: new THREE.Vector3(0.9, 0.1, 0.3) },
      },
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;
        uniform float u_scale;
        uniform vec3 colorA;
        uniform vec3 colorB;
        uniform vec3 colorC;
        uniform vec3 colorD;

        vec2 hash(vec2 p) {
          p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
          return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
        }

        float noise(vec2 p) {
          const float K1 = 0.366025404;
          const float K2 = 0.211324865;
          
          vec2 i = floor(p + (p.x + p.y) * K1);
          vec2 a = p - i + (i.x + i.y) * K2;
          vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec2 b = a - o + K2;
          vec2 c = a - 1.0 + 2.0 * K2;
          
          vec3 h = max(0.5 - vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
          vec3 n = h * h * h * h * vec3(dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
          
          return dot(n, vec3(70.0));
        }

        float voronoi(vec2 x) {
          vec2 n = floor(x);
          vec2 f = fract(x);
          float md = 5.0;
          
          for(int i = -1; i <= 1; i++) {
            for(int j = -1; j <= 1; j++) {
              vec2 g = vec2(float(i),float(j));
              vec2 o = hash(n + g);
              o = 0.5 + 0.5 * sin(u_time * 0.5 + 6.2831 * o);
              vec2 r = g + o - f;
              float d = dot(r, r);
              md = min(md, d);
            }
          }
          return md;
        }

        void main() {
          vec2 uv = gl_FragCoord.xy / u_resolution.xy;
          uv.x *= u_resolution.x / u_resolution.y;
          
          float timeScale = u_scale * 0.5;
          float noiseScale = 3.0 * u_scale;
          
          float n1 = noise(uv * noiseScale + u_time * timeScale);
          float n2 = noise(uv * (noiseScale * 2.0) - u_time * timeScale);
          
          float v1 = voronoi(uv * (5.0 * u_scale) + u_time * timeScale);
          
          float angle = atan(uv.y - 0.5, uv.x - 0.5);
          float radius = length(uv - 0.5);
          float swirl = sin(angle * 3.0 + u_time * timeScale + radius * 5.0) * 0.5 + 0.5;
          
          float blend = mix(n1 * 0.6 + n2 * 0.4, swirl, 0.3) + v1 * 0.2;
          
          vec3 color1 = mix(colorA, colorB, blend);
          vec3 color2 = mix(colorC, colorD, swirl);
          vec3 finalColor = mix(color1, color2, sin(u_time * timeScale) * 0.5 + 0.5);
          
          float glow = pow(1.0 - radius, 2.0) * 0.2 * u_scale;
          float vignette = smoothstep(1.2, 0.5, radius);
          finalColor = finalColor * vignette + vec3(glow) * colorD;
          
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const quad = new THREE.Mesh(geometry, material);
    scene.add(quad);

    const handlePointerMove = (event: MouseEvent | TouchEvent) => {
      let x, y;
      if (event instanceof MouseEvent) {
        x = event.clientX;
        y = event.clientY;
      } else {
        x = event.touches[0].clientX;
        y = event.touches[0].clientY;
      }
      material.uniforms.u_mouse.value.set(
        x / window.innerWidth,
        y / window.innerHeight
      );
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove);
    window.addEventListener('touchstart', handlePointerMove);

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      
      const pixelRatio = isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio;
      renderer.setPixelRatio(pixelRatio);
      
      renderer.setSize(clientWidth, clientHeight);
      material.uniforms.u_resolution.value.set(clientWidth, clientHeight);
      
      material.uniforms.u_scale.value = window.innerWidth <= 768 ? 0.5 : 1.0;
    };

    container.appendChild(renderer.domElement);
    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const timeScale = isMobile ? 0.3 : 0.5;
      material.uniforms.u_time.value = clock.getElapsedTime() * timeScale;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 -z-10" />;
};