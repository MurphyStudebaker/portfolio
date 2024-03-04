"use client";
import Splash from "../../components/Splash";
import Footer from "../../components/Footer";
import FlowField from "./components/FlowField";
import useWindowDimensions from "./hooks/useWindowDimensions";

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="min-h-screen flex flex-wrap">
      <main className="p-8 flex-1 max-w-xl flex flex-col justify-between z-10">
        <Splash />
        {/* <h2 className={inter.className + " font-bold text-2xl pb-6"}>
          Writing
        </h2> */}
        {/* <BlogPostList /> */}
        <Footer />
      </main>
      <div className="flex-2 absolute top-0 right-0 z-0 hide-on-dark">
        <FlowField
          width={width}
          height={height}
          strokeColor={"white"}
          nLines={150}
        />
      </div>
    </div>
  );
}
