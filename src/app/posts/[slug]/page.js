import notion from "../../../../lib/notion";

export default function Post({ params }) {
  return (
    <div>
      <h1>{params.slug}</h1>
      <p>body</p>
    </div>
  );
}
