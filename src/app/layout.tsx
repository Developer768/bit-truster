import type { Metadata } from "next";
import { Roboto, Roboto_Slab, Assistant } from "next/font/google";
import "\../styles/globals.css"
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const roboto = Roboto({ weight: ["100","300","400","500","700","900"], subsets: ["latin"], display: "swap",variable: '--font-roboto', });

const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: '--font-roboto-slab', });

const assistant = Assistant({ subsets: ["latin"], variable: '--font-assistant', });

export const metadata: Metadata = {
  title: "BitLocker Recovery: How to Unlock & Recover Encrypted Drives",
  description: "A BitLocker recovery encrypted disk needs its data recovered. recover encrypted disks, go to our thorough guide, which includes detailed methods.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoSlab.variable} ${assistant.variable} transition-all ease-in-out`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
