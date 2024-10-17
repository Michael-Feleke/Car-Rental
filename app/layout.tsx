import type { Metadata } from "next";
import "./_styles/global.css";
import Logo from "./_components/Logo";

export const metadata: Metadata = {
  title: {
    template: "%s | GoDrive",
    default: "Welcome | GoDrive",
  },
  description:
    "Made with ❤️ by Michael Feleke ,GoDrive is a car rental service that allows you to rent cars at an affordable price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Logo />
        {children}
      </body>
    </html>
  );
}
