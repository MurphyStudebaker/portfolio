import Splash from "../../components/Splash";
import BlogPostList from "../../components/BlogPostList";
import Footer from "../../components/Footer";
import { inter } from "./fonts";
export default function Home() {
  return (
    <div className="flex flex-row justify-center min-h-screen px-16">
      <div className="flex flex-col justify-between max-w-4xl pt-24">
        <main className="border-top">
          <Splash />
          <h2 className={inter.className + " font-bold text-2xl pb-6"}>
            Writing
          </h2>
          <BlogPostList />
        </main>
        <Footer />
      </div>
    </div>
  );
}
