import { getPublishedPosts, getAllPosts } from "../lib/notion";
import StyledLink from "./StyledLink";

export default async function BlogPostList() {
  const data = await getAllPosts();
  return (
    <ul className="text-xl md:text-2xl flex flex-col gap-2 md:gap-4">
      {data.map((p) => (
        <li key={p.id}>
          <span className="text-green-600 font-bold">* </span>
          <StyledLink href={"/posts/" + p.slug}>{p.title}</StyledLink>
        </li>
      ))}
    </ul>
  );
}
