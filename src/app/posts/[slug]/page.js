import { getPostBySlug } from "../../../../lib/notion";
import ReactMarkdown from "react-markdown";

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <div>
      <h1>{post.title}</h1>
      <ReactMarkdown>{post.markdown}</ReactMarkdown>
    </div>
  );
}
