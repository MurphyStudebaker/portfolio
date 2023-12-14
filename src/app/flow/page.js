"use client";
import React, { useRef, useEffect, useState } from "react";
import FlowField from "../components/FlowField";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function FlowPage() {
  const { width, height } = useWindowDimensions();

  return (
    <main className="w-full h-full">
      <FlowField width={width} height={height} nLines={100} />
    </main>
  );
}
