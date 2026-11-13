import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://muhdfaris.dev"),
  title: "Muhammed Faris K | AI/ML Engineering Student & Machine Learning Developer",
  description:
    "Official portfolio of Muhammed Faris K. Final-year Artificial Intelligence and Machine Learning engineering student building intelligent systems, computer vision, deep learning, NLP and Generative AI solutions. Open for internships.",
  keywords: [
    "Muhammed Faris K",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "AIML Engineer",
    "Kathakali Mudra Recognition",
    "AI Portfolio",
    "Kerala Developer",
    "VTU AIML",
  ],
  authors: [{ name: "Muhammed Faris K" }],
  openGraph: {
    title: "Muhammed Faris K | AI/ML Engineering Student & Developer",
    description:
      "Passionate about building intelligent systems and practical technology solutions. Open for internships.",
    url: "https://github.com/gitfaarieeyy",
    siteName: "Muhammed Faris K Portfolio",
    images: [
      {
        url: "/images/faris-portrait-cutout.webp",
        width: 635,
        height: 1024,
        alt: "Muhammed Faris K - AI/ML Engineering Student",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#050505] text-[#ededed] antialiased selection:bg-red-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
