export default function Heading() {
  return (
    <section>
      <h1 className="font-black text-7xl">
        <span className="text-green-600">I'm Murphy,</span>
        <br />a creative software engineer
        <span className="text-green-600 animate-spin">*</span>in Los Angeles
      </h1>
      <div className="h-6" />
      <h2 className="text-xl">
        <span className="text-green-600">*</span>I'm also a
        <a href="" className="transition-colors hover:text-green-600">
          songwriter
        </a>
        ,
        <a className="transition-colors hover:text-green-600" href="">
          amateur carpenter
        </a>
        , and (retired)
        <a className="transition-colors hover:text-green-600" href="">
          Harry Potter YouTuber
        </a>
      </h2>
      <div className="h-24" />
      <p className="text-3xl">
        I currently
        <span className="text-green-600">teach computer science full-time</span>
        at Chapman University's Fowler School of Engineering
        <span className="text-green-600">
          while getting my Masters in Computer Science
        </span>
        from Georgia Tech's OMSCS
      </p>
      <div className="h-6" />

      <p className="text-xl text-green-600">
        Previously: Data Scientist II at The Walt Disney Company
      </p>
    </section>
  );
}
