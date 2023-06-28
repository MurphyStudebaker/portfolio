import notion from "../../../../lib/notion";

async function getData(slug) {
  // look up a post id using slug
  // fetch the body of the post by id
  // send it back to the client
  return res
}


export default function Post({ params }) {
  const data = await getData(params.slug)
  return (
    <div>
      <h1>{params.slug}</h1>
      <p>body</p>
    </div>
  );
}
