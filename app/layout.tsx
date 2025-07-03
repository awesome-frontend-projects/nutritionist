import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nutritionist | Healthy Diet Planning Website.",
  description:
    "Get personalized meal plans, expert nutrition advice, and healthy eating tips tailored to your lifestyle. Start your journey to better health with our professional nutritionist services.",
  // icons: {
  //   icon: "/favicon.svg",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.className}>
      <body>
        <NextTopLoader color="#cbea7b" showSpinner={false} />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
