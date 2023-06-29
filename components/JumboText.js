import { inter } from "../src/app/fonts";

export default function JumboText({ children }) {
  return (
    <h1 className={"text-4xl md:text-6xl font-bold py-4 " + inter.className}>
      {...children}
    </h1>
  );
}
