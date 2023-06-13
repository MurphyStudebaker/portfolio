import Splash from "../../components/Splash";
export default function Home() {
  return (
    <div className="flex flex-row justify-center min-h-screen px-16">
      <div className="flex flex-col justify-between max-w-4xl pt-24">
        <main className="border-top">
          <Splash />
        </main>
        <footer className="py-6">
          <a className="transition-colors hover:text-green-600" href="">
            built with 🏳️‍🌈
          </a>{" "}
          by murphy studebaker
        </footer>
      </div>
    </div>
  );
}
