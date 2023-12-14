"use client";
import React, { useRef, useEffect, useState } from "react";
// Source: https://www.youtube.com/watch?v=MJNy2mdCt20&t=304s&ab_channel=Frankslaboratory
class Particle {
  constructor(effect) {
    this.effect = effect;
    // chooses a random starting coordinate within canvas bounds
    // to draw our particle
    this.x = Math.floor(Math.random() * this.effect.width);
    this.y = Math.floor(Math.random() * this.effect.width);
    this.length =
      Math.floor(Math.random() * this.effect.maxLength) + this.effect.minLength;
    this.history = [{ x: this.x, y: this.y }];
    this.frameCount = 0;
  }
  draw(context) {
    // draws particle at randomly chosen coordinate
    // with consistent width and height vals
    context.beginPath();
    context.moveTo(this.history[0].x, this.history[0].y);
    this.history.forEach((h) => {
      context.lineTo(h.x, h.y);
    });
    context.stroke();
  }
  update() {
    this.frameCount++;
    let x = Math.floor(this.x / this.effect.cellSize);
    let y = Math.floor(this.y / this.effect.cellSize);
    let index = y * this.effect.cols + x;
    let angle = this.effect.flowField[index];

    this.speedX = Math.cos(angle);
    this.speedY = Math.sin(angle);
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.frameCount <= this.length) {
      this.history.push({ x: this.x, y: this.y });
    }
  }
}

class Effect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.particles = [];
    this.nParticles = 100;
    this.cellSize = 20;
    this.minLength = 100;
    this.maxLength = 300;
    this.curve = 0.7;
    this.zoom = 0.2;
    this.rows;
    this.cols;
    this.flowField = []; // holds angle values for each cell
    this.init();
  }
  init() {
    this.rows = Math.floor(this.height / this.cellSize);
    this.cols = Math.floor(this.width / this.cellSize);
    this.flowField = [];
    for (let y = 0; y < this.rows; ++y) {
      for (let x = 0; x < this.cols; ++x) {
        let angle =
          Math.cos(x * this.zoom) + Math.sin(y * this.zoom) + this.curve;
        this.flowField.push(angle);
      }
    }
    for (let i = 0; i < this.nParticles; ++i) {
      this.particles.push(new Particle(this));
    }
  }
  render(context) {
    for (let i = 0; i < this.maxLength; ++i) {
      this.particles.forEach((particle) => {
        particle.update(); // move to next frame position
      });
    }
    this.particles.forEach((particle) => {
      particle.draw(context);
    });
  }
}

export default function Flow() {
  const canvasRef = useRef(null);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const LINE_WIDTH = 5;

  function animate(context, effect) {
    effect.render(context);
    window.requestAnimationFrame(animate);
  }
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let flow = new Effect(width, height);

    context.fillStyle = "white";
    context.strokeStyle = "white";
    context.lineWidth = LINE_WIDTH;
    context.lineCap = "round";

    flow.render(context);
  }, []);
  return (
    <main className="max-w-4xl pt-24">
      <canvas ref={canvasRef} width={width} height={height} />;
    </main>
  );
}
