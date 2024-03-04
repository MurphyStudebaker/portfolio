"use client";
import React, { useRef, useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";

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
  constructor(width, height, nLines, strokeColor) {
    this.width = width || 0;
    this.height = height || 0;
    this.particles = [];
    this.nParticles = 400;
    this.cellSize = 10;
    this.minLength = 50;
    this.maxLength = 200 + width * 0.1;
    this.curve = 0.4;
    this.zoom = 0.15;
    this.strokeColor = strokeColor;
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
    context.strokeStyle = this.strokeColor || "green";
    context.lineWidth = 2;
    context.lineCap = "round";
    for (let i = 0; i < this.maxLength; ++i) {
      this.particles.forEach((particle) => {
        particle.update(); // move to next frame position
      });
    }
    this.particles.forEach((particle) => {
      // make sure no particles cut off into text
      let wholeLineOnCanvas = true;
      particle.history.forEach((point) => {
        if (
          point.y >= this.height - context.lineWidth ||
          point.y <= 0 + context.lineWidth
        )
          wholeLineOnCanvas = false;
      });
      if (wholeLineOnCanvas) particle.draw(context);
    });
  }
}

export default function FlowField({ width, height, strokeColor, nLines }) {
  const canvasRef = useRef(null);
  // const { width, height } = useWindowDimensions();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let flow = new Effect(width, height, nLines, strokeColor);
    flow.render(context);
  }, [width, height]);
  return <canvas ref={canvasRef} width={width} height={height} />;
}
