const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");
const fs = require("fs");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const n2m = new NotionToMarkdown({ notionClient: notion });

export function getPageMetaData(pageObject) {
  return {
    id: pageObject.id,
    last_edited_time: pageObject.last_edited_time,
    title: pageObject.properties.Name.title[0].plain_text,
    slug: pageObject.properties.Slug.rich_text[0]?.plain_text,
    status: pageObject.properties.Status.status.name,
  };
}

export async function getAllPosts() {
  const res = await notion.databases.query({
    database_id: process.env.CMS_DB_ID,
  });
  const posts = res.results.map((post) => getPageMetaData(post));
  return posts;
}

export async function getPublishedPosts() {
  const res = await notion.databases.query({
    database_id: process.env.CMS_DB_ID,
    filter: {
      property: "Status",
      status: {
        equals: "Published",
      },
    },
  });
  const posts = res.results.map((post) => getPageMetaData(post));
  return posts;
}

export async function getPostById(postId) {
  const mdblocks = await n2m.pageToMarkdown(postId);
  const mdString = n2m.toMarkdownString(mdblocks);
  return mdString;
}

// CODE FROM SOURCE: https://bejamas.io/blog/how-to-create-next-js-blog-using-notion-as-a-cms/
export async function getPostBySlug(slug) {
  const response = await notion.databases.query({
    database_id: process.env.CMS_DB_ID,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });

  const page = response.results[0];
  const metadata = getPageMetaData(page);
  const mdblocks = await n2m.pageToMarkdown(page.id);
  const mdString = n2m.toMarkdownString(mdblocks);

  return {
    metadata,
    markdown: mdString.parent,
  };
}

export default notion;
