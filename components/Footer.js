import StyledLink from "./StyledLink";
export default function Footer() {
  return (
    <footer className="pt-24 pb-6">
      <StyledLink href="">built with 🏳️‍🌈</StyledLink> by murphy studebaker{" "}
      <span className="text-green-600">*</span> art is auto-generated
    </footer>
  );
}
