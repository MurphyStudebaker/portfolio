"use client";
import Splash from "../../components/Splash";
import Footer from "../../components/Footer";
import FlowField from "./components/FlowField";
import useWindowDimensions from "./hooks/useWindowDimensions";

export default function Home() {
  const { width, height } = useWindowDimensions();

  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-full">
        <FlowField
          width={width}
          height={200}
          strokeColor={"white"}
          nLines={75}
        />
      </div>
      <main className="col-start-2 col-span-4 row-start-2">
        <Splash />
        {/* <h2 className={inter.className + " font-bold text-2xl pb-6"}>
          Writing
        </h2> */}
        {/* <BlogPostList /> */}
      </main>
      <div className="col-start-2 col-span-4">
        <Footer />
      </div>
      <div className="col-span-full row-span-full -mt-96">
        <FlowField
          width={width}
          height={height}
          strokeColor={"white"}
          nLines={500}
        />
      </div>
    </div>
  );
}
