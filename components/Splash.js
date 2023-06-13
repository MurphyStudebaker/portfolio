import { inter } from "../src/app/fonts";
export default function Splash() {
  return (
    <section>
      <h1 className={`font-black text-7xl ${inter.className}`}>
        <span className="text-green-600">I&apos;m Murphy,</span>
        <br /> a creative software engineer
        <span className="text-green-600">*</span> in Los Angeles
      </h1>
      <div className="h-6" />
      <h2 className="text-xl">
        <span className={"text-green-600 " + inter.className}>*</span>I&apos;m
        also a{" "}
        <a
          href="https://open.spotify.com/artist/2CDcnaCbLqaJBTDxFlaoXj"
          className="transition-colors hover:text-green-600"
        >
          songwriter & musician
        </a>
        ,
        <a
          className="transition-colors hover:text-green-600"
          href="https://medium.com/@murphystude/how-i-built-a-home-in-the-backseat-of-my-honda-fit-83070a256a6d"
        >
          {" "}
          amateur carpenter
        </a>
        , and (retired){" "}
        <a
          className="transition-colors hover:text-green-600"
          href="https://www.youtube.com/channel/UCVT1XES1u_NJGQjznODQpMA?view_as=subscriber"
        >
          Harry Potter YouTuber
        </a>
      </h2>
      <div className="h-24" />
      <p className="text-3xl">
        I currently{" "}
        <span className="text-green-600">
          teach computer science full-time{" "}
        </span>
        at Chapman University&apos;s Fowler School of Engineering{" "}
        <span className="text-green-600">while getting my Masters </span>
        in Computer Science at Georgia Tech & building side projects
      </p>
      <div className="h-6" />

      <p className="text-xl text-green-600">
        Previously: Data Scientist II at The Walt Disney Company
      </p>

      <div className="h-24" />
      <p className="text-xl">
        Things I&apos;ve Built:{" "}
        <a
          className="transition-colors hover:text-green-600"
          href="https://inhale.netlify.app/"
        >
          Inhale Meditation Timer{" "}
        </a>{" "}
        |{" "}
        <a
          className="transition-colors hover:text-green-600"
          href="https://buildwithpride.org/"
        >
          Build With Pride{" "}
        </a>{" "}
        |{" "}
        <a
          className="transition-colors hover:text-green-600"
          href="https://getcascara.com/"
        >
          Cascara{" "}
        </a>
      </p>
      <div className="h-24" />
    </section>
  );
}
