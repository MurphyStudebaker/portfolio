import { inter } from "../src/app/fonts";
import JumboText from "./JumboText";
import StyledLink from "./StyledLink";
export default function Splash() {
  return (
    <section>
      <JumboText>
        <span className="text-green-600">I&apos;m Murphy,</span>
        <br /> a creative software engineer
        <span className="text-green-600">*</span> in Los Angeles
      </JumboText>
      <div className="h-6" />
      <h2 className="text-xl">
        <span className={"text-green-600 " + inter.className}>*</span>I&apos;m
        also a{" "}
        <StyledLink href="https://open.spotify.com/artist/2CDcnaCbLqaJBTDxFlaoXj">
          songwriter & musician
        </StyledLink>
        ,
        <StyledLink href="https://medium.com/@murphystude/how-i-built-a-home-in-the-backseat-of-my-honda-fit-83070a256a6d">
          {" "}
          amateur carpenter
        </StyledLink>
        , and (retired){" "}
        <StyledLink href="https://www.youtube.com/channel/UCVT1XES1u_NJGQjznODQpMA?view_as=subscriber">
          Harry Potter YouTuber
        </StyledLink>
      </h2>
      <div className="h-24" />
      <p className="text-xl md:text-2xl">
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
        <StyledLink href="https://inhale.netlify.app/">
          Inhale Meditation Timer{" "}
        </StyledLink>{" "}
        <span className="text-green-600">*</span>{" "}
        <StyledLink href="https://buildwithpride.org/">
          Build With Pride{" "}
        </StyledLink>{" "}
        <span className="text-green-600">* </span>
        <StyledLink href="https://getcascara.com/">Cascara </StyledLink>
      </p>
      <div className="h-24" />
    </section>
  );
}
