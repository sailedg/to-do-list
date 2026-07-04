import React, { useEffect, useRef } from 'react';
import './Confetti.css';

function Confetti() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    let w = window.innerWidth;
    let h = window.innerHeight;
    const maxConfettis = 150;
    const particles = [];
    let animationId;
    let isActive = true;

    const timeoutId = setTimeout(() => {
      isActive = false;
    }, 2000);

    const possibleColors = [
      "DodgerBlue",
      "OliveDrab",
      "Gold",
      "Pink",
      "SlateBlue",
      "LightBlue",
      "Gold",
      "Violet",
      "PaleGreen",
      "SteelBlue",
      "SandyBrown",
      "Chocolate",
      "Crimson"
    ];

    const randomFromTo = (from, to) => Math.floor(Math.random() * (to - from + 1) + from);

    class ConfettiParticle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h - h;
        this.r = randomFromTo(11, 33);
        this.d = Math.random() * maxConfettis + 11;
        this.color = possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;
      }

      draw() {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        context.stroke();
      }
    }

    const drawParticles = () => {
      context.clearRect(0, 0, w, h);

      let remainingFlakes = 0;

      for (let i = 0; i < maxConfettis; i++) {
        const particle = particles[i];
        particle.draw();

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= h) remainingFlakes++;

        // If a confetti has fluttered out of view,
        // bring it back to above the viewport and let it re-fall.
        if (particle.x > w + 30 || particle.x < -30 || particle.y > h) {
          if (isActive) {
            particle.x = Math.random() * w;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
          }
        }
      }

      if (isActive || remainingFlakes > 0) {
        animationId = requestAnimationFrame(drawParticles);
      }
    };

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("resize", handleResize, false);

    // Initialize
    canvas.width = w;
    canvas.height = h;

    // Push new confetti objects to `particles[]`
    for (let i = 0; i < maxConfettis; i++) {
      particles.push(new ConfettiParticle());
    }

    drawParticles();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
      clearTimeout(timeoutId);
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas"></canvas>;
}

export { Confetti };
