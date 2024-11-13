import type { Metadata } from "next";
import "@/app/_styles/global.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

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
  openGraph: {
    title: "GoDrive - Affordable Car Rental",
    description:
      "Experience quality and affordability with GoDrive's wide range of vehicles. Rent your next ride today!",
    siteName: "GoDrive",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid ">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
