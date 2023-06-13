import "./globals.css";
import { source } from "./fonts";
export const metadata = {
  title: "Murphy Studebaker | Software Engineer",
  description:
    "Portfolio Site for Murphy Studebaker, a software engineer in Los Angeles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={source.className}>{children}</body>
    </html>
  );
}
