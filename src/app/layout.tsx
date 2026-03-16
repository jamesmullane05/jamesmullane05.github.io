import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./context/themeContext"; 


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "James Mullane | Software Developer & Entrepreneur",
    template: "%s | James Mullane",
  },
  description: "James Mullane is a Computer Science student at the University of Auckland and Co-Founder of Cosmoshop NZ. Passionate about web development, software engineering, and entrepreneurship.",
  keywords: [
    "James Mullane",
    "University of Auckland",
    "Cosmoshop NZ",
    "Software Developer",
    "Web Developer",
    "Computer Science Student",
    "Auckland Developer",
  ],
  authors: [{ name: "James Mullane" }],
  creator: "James Mullane",
  openGraph: {
    title: "James Mullane | Software Developer & Entrepreneur",
    description:
      "Computer Science student at the University of Auckland and Co-Founder of Cosmoshop NZ. Building modern web applications and scalable digital solutions.",
    url: "https://yourdomain.com",
    siteName: "James Mullane Portfolio",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Mullane | Software Developer",
    description:
      "Computer Science student at the University of Auckland and Co-Founder of Cosmoshop NZ.",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-black`}
      >
        <ThemeProvider>
          <NavigationBar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}


