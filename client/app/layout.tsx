import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const marvinVisions = localFont({
  src: '../public/fonts/MarvinVisions-Bold.woff',
  variable: '--font-marvin-visions',
})

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Encontre seu especialista em cannabis medicinal",
	description: "Encontre seu especialista em cannabis medicinal",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} ${marvinVisions.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}