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
        <link rel="icon" href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ed276a130292813.617cbe23df1ee.png" sizes="any" />
        <link rel="icon" type="image/png" href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ed276a130292813.617cbe23df1ee.png" />
      </head>
      <body className={inter.className}>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
