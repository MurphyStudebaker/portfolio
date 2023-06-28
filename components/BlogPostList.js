import notion from "../lib/notion";

async function getData() {
  const res = await notion.databases.query({
    database_id: process.env.CMS_DB_ID,
  });
  const posts = res.results.map((post) => ({
    id: post.id,
    last_edited_time: post.last_edited_time,
    title: post.properties.Name.title[0].plain_text,
    slug: post.properties.Slug.rich_text[0]?.plain_text,
    status: post.properties.Status.status.name,
  }));
  return posts;
}

export default async function BlogPostList() {
  const data = await getData();
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
