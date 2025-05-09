import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from '@/components/ChatWidget/ChatWidget';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mansur Akidah",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/Mans.jpg" sizes="any" />
        <link rel="icon" type="image/png" href="images/Mans.jpg" />
        
      </head>
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
