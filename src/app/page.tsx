"use client";
import Splash from "../../components/Splash";
import BlogPostList from "../../components/BlogPostList";
import Footer from "../../components/Footer";
import { inter } from "./fonts";
import FlowField from "./components/FlowField";
import useWindowDimensions from "./hooks/useWindowDimensions";

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-full">
        <FlowField
          width={width}
          height={width / 6}
          strokeColor={"white"}
          nLines={100}
        />
      </div>
      <main className="col-start-2 col-span-4 border-top">
        <Splash />
        {/* <h2 className={inter.className + " font-bold text-2xl pb-6"}>
          Writing
        </h2> */}
        {/* <BlogPostList /> */}
      </main>
      <div className="col-start-2 col-span-4">
        <Footer />
      </div>
    </div>
  );
}
