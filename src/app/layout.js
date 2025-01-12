import "./globals.css";
import { Inter } from "next/font/google";
import { Menu } from "@/components/menu/Menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cool Navigatiom",
  description:
    "Created by Nouran following this tutorial https://www.youtube.com/watch?v=R_PKABXn4vk",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
