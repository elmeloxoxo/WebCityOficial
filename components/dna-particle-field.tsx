"use client";

import { useEffect, useRef } from "react";

type DustParticle = {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
};

export function DnaParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !host || !context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dust: DustParticle[] = Array.from({ length: 230 }, (_, index) => ({
      x: ((Math.sin(index * 127.1 + 8) * 43758.5453) % 1 + 1) % 1,
      y: ((Math.sin(index * 311.7 + 23) * 24634.6345) % 1 + 1) % 1,
      size: 0.35 + ((index * 17) % 11) / 10,
      phase: index * 1.73,
      speed: 0.25 + (index % 7) * 0.09,
    }));

    let width = 0;
    let height = 0;
    let frame = 0;
    let elapsed = 0;

    const resize = () => {
      const bounds = host.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      elapsed = time * 0.00018;
      const isLight = document.documentElement.dataset.theme === "light";
      context.clearRect(0, 0, width, height);
      context.save();
      context.globalCompositeOperation = isLight ? "source-over" : "screen";

      const centerAt = (t: number) => {
        const cx = width * (0.59 + t * 0.27);
        const cy = height * (0.88 - t * 0.76);
        const axisX = width * 0.27;
        const axisY = -height * 0.76;
        const length = Math.hypot(axisX, axisY) || 1;
        const normalX = -axisY / length;
        const normalY = axisX / length;
        const radius = Math.min(width * 0.135, height * 0.205);
        const phase = t * Math.PI * 10 + elapsed;
        const depth = Math.sin(phase);
        const offset = Math.cos(phase) * radius;
        return {
          x: cx + normalX * offset,
          y: cy + normalY * offset,
          depth,
          phase,
          oppositeX: cx - normalX * offset,
          oppositeY: cy - normalY * offset,
        };
      };

      const strand = (opposite: boolean) => {
        context.beginPath();
        for (let step = 0; step <= 140; step += 1) {
          const t = step / 140;
          const point = centerAt(t);
          const x = opposite ? point.oppositeX : point.x;
          const y = opposite ? point.oppositeY : point.y;
          if (step === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }
        context.strokeStyle = isLight
          ? opposite ? "rgba(10, 107, 66, .42)" : "rgba(13, 133, 70, .48)"
          : opposite ? "rgba(46, 220, 144, .2)" : "rgba(123, 255, 175, .22)";
        context.lineWidth = isLight ? 1 : 0.8;
        context.stroke();
      };

      strand(false);
      strand(true);

      for (let rung = 0; rung <= 24; rung += 1) {
        const t = rung / 24;
        const point = centerAt(t);
        const alpha = isLight
          ? 0.18 + Math.abs(point.depth) * 0.22
          : 0.08 + (Math.abs(point.depth) * 0.18);
        context.beginPath();
        context.moveTo(point.x, point.y);
        context.lineTo(point.oppositeX, point.oppositeY);
        context.strokeStyle = isLight
          ? `rgba(10, 119, 63, ${alpha})`
          : `rgba(101, 243, 159, ${alpha})`;
        context.lineWidth = isLight ? 0.9 : 0.7;
        context.stroke();

        for (let bead = 0; bead <= 13; bead += 1) {
          const mix = bead / 13;
          const shimmer = 0.62 + Math.sin(elapsed * 3 + rung * 0.72 + bead) * 0.2;
          context.beginPath();
          context.arc(
            point.x + (point.oppositeX - point.x) * mix,
            point.y + (point.oppositeY - point.y) * mix,
            0.45 + shimmer * 0.52,
            0,
            Math.PI * 2,
          );
          context.fillStyle = isLight
            ? `rgba(12, 132, 64, ${Math.min(alpha + shimmer * 0.23, 0.78)})`
            : `rgba(105, 247, 157, ${alpha + shimmer * 0.16})`;
          context.fill();
        }
      }

      for (let sample = 0; sample <= 190; sample += 1) {
        const t = sample / 190;
        const point = centerAt(t);
        const dots = 4;
        for (let strandIndex = 0; strandIndex < 2; strandIndex += 1) {
          const x = strandIndex ? point.oppositeX : point.x;
          const y = strandIndex ? point.oppositeY : point.y;
          const depth = strandIndex ? -point.depth : point.depth;
          const front = isLight
            ? 0.4 + (depth + 1) * 0.2
            : 0.35 + (depth + 1) * 0.28;
          for (let dot = 0; dot < dots; dot += 1) {
            const angle = sample * 1.91 + dot * 2.4 + strandIndex * Math.PI;
            const spread = (dot === 0 ? 0 : 1.6 + dot * 1.5);
            const px = x + Math.cos(angle) * spread;
            const py = y + Math.sin(angle) * spread;
            const size = isLight
              ? dot === 0 ? 1.3 + front * 0.6 : 0.55 + front * 0.55
              : dot === 0 ? 1.05 + front * 0.55 : 0.45 + front * 0.45;
            context.beginPath();
            context.arc(px, py, size, 0, Math.PI * 2);
            context.fillStyle = isLight
              ? strandIndex
                ? `rgba(8, 111, 77, ${front})`
                : `rgba(15, 133, 62, ${front})`
              : strandIndex
                ? `rgba(39, 222, 153, ${front})`
                : `rgba(139, 255, 174, ${front})`;
            context.fill();
          }
        }
      }

      for (const particle of dust) {
        const x = width * (0.36 + particle.x * 0.64);
        const y = height * particle.y;
        const alpha = isLight
          ? 0.22 + (Math.sin(elapsed * particle.speed + particle.phase) + 1) * 0.13
          : 0.14 + (Math.sin(elapsed * particle.speed + particle.phase) + 1) * 0.12;
        context.beginPath();
        context.arc(x, y, particle.size, 0, Math.PI * 2);
        context.fillStyle = isLight
          ? `rgba(12, 122, 62, ${alpha})`
          : `rgba(91, 236, 151, ${alpha})`;
        context.fill();
      }

      context.restore();
      if (!reducedMotion) frame = window.requestAnimationFrame(draw);
    };

    resize();
    draw(0);
    const observer = new ResizeObserver(() => {
      resize();
      if (reducedMotion) draw(0);
    });
    observer.observe(host);
    const themeObserver = new MutationObserver(() => {
      if (reducedMotion) draw(0);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => {
      observer.disconnect();
      themeObserver.disconnect();
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero__dna" aria-hidden="true" />;
}
