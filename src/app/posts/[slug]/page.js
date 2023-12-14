import StyledLink from "../../../../components/StyledLink";
import JumboText from "../../../../components/JumboText";
import { getPostBySlug, getPublishedPosts } from "../../../../lib/notion";
import ReactMarkdown from "react-markdown";
import Footer from "../../../../components/Footer";

export async function generateStaticParams() {
  const posts = await getPublishedPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Post({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <div className="flex flex-row justify-center min-h-screen px-16">
      <div className="flex flex-col justify-between max-w-4xl pt-24">
        <header>
          <StyledLink href="/">{"< "} Back Home</StyledLink>
          <JumboText>
            <span className="text-green-600">* </span> {post.metadata.title}
          </JumboText>
        </header>
        <main className="py-12">
          <ReactMarkdown className="prose prose-lg md:prose-xl dark:prose-invert">
            {post.markdown}
          </ReactMarkdown>
        </main>
        <Footer />
      </div>
    </div>
  );
}
