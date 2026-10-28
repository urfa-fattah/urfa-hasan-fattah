import { useEffect, useRef } from 'react';
import { useReducedMotion, useScreenSize } from '../../hooks/useUtils';

/** Lightweight canvas-based particle constellation — adaptive to Dark & Light themes */
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();
  const screen = useScreenSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let mouse = { x: -1000, y: -1000 };

    const count = screen === 'mobile' ? 45 : screen === 'tablet' ? 75 : 110;
    const connectionDist = screen === 'mobile' ? 100 : 140;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouse = (e: MouseEvent) => {
      mouse = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouse);

    // Particles array
    const particles: Array<{
      x: number; y: number;
      vx: number; vy: number;
      size: number; opacity: number;
      hue: number;
    }> = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: Math.random() * 2 + 0.6,
        opacity: Math.random() * 0.45 + 0.15,
        hue: Math.random() > 0.5 ? 260 : 190, // violet or cyan
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isLight = document.documentElement.classList.contains('light');

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movement
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Subtle mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180) {
          const force = ((180 - dist) / 180) * 0.02;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        if (isLight) {
          // Darker, rich jewel tones for crisp visibility on light background
          const lightness = p.hue === 260 ? 45 : 38;
          ctx.fillStyle = `hsla(${p.hue}, 75%, ${lightness}%, ${p.opacity * 0.85})`;
        } else {
          ctx.fillStyle = `hsla(${p.hue}, 70%, 65%, ${p.opacity})`;
        }
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDist) {
            const alpha = (1 - cdist / connectionDist) * (isLight ? 0.16 : 0.12);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            if (isLight) {
              ctx.strokeStyle = `hsla(260, 60%, 45%, ${alpha})`;
            } else {
              ctx.strokeStyle = `hsla(260, 60%, 60%, ${alpha})`;
            }
            ctx.lineWidth = isLight ? 0.6 : 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, [reduced, screen]);

  if (reduced) {
    return (
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-radial from-accent-violet/8 via-transparent to-transparent" />
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden="true"
      style={{ background: 'transparent' }}
    />
  );
}
