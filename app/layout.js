import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="navbar">
                    <Link href="/" className="logo">
                        Chan-Forum
                    </Link>
                    <Link href="/list">List</Link>
                    <Link href="/write">Write</Link>
                    <Link href="/signup">SignUp</Link>
                </div>
                {children}
            </body>
        </html>
    );
}
