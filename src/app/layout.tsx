import type { Metadata } from "next"
import { Inter } from "next/font/google"
import LocalFont from "next/font/local"
import "./globals.css"

// Metadata
export const metadata: Metadata = {
  title: "renkzk",
  icons: {
    icon: "/shuttle.png",
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
      <body className={"font-sans bg-black text-zinc-50 bg-gradient-to-tl from-black via-zinc-600/25 to-black"}>
        {children}
      </body>
    </html>
  )
}
