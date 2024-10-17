import type { Metadata } from "next";
import "@/app/_styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

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
      <body
        className={`${josefin.className} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 ">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <footer>
          <p className="text-center text-gray-400 text-sm p-4">
            &copy; {new Date().getFullYear()} GoDrive. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
