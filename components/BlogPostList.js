import { getAllPosts } from "../lib/notion";

export default async function BlogPostList() {
  const data = await getAllPosts();
  return (
    <div>
      <h2>Writing</h2>
      <ul>
        {data.map((p) => (
          <li key={p.id}>
            <a href={"/posts/" + p.slug}>{p.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
