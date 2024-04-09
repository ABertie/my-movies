import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'

import Switch from "@/components/switch";

import { Yrsa, Mulish } from 'next/font/google'

const merriweather = Yrsa({
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
})

export const metadata = {
  title: "MyMovies",
  description: "New movies comming up",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${merriweather.variable} ${mulish.variable} font-sans relative min-h-screen dark:bg-black dark:text-white`}>
        <Switch />
        {children}
      </body>
    </html>
  )
}
