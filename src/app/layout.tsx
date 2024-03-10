import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LocalFont from "next/font/local"
import "./globals.css"

// Metadata
export const metadata: Metadata = {
  title: "renkzk",
  icons: {
    icon: "/vercel.svg",
  },
}

// Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
