export default function StyledLink({ href, children }) {
  return (
    <a href={href} className="transition-colors hover:text-green-600">
      {...children}
    </a>
  );
}
