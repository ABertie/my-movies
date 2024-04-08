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

export const test = {
  id: "test",
  title: "Spiderman: No Way Home",
  stars: "9.1",
  img: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
  time: "2h 28m",
  themes: ["action", "adventure", "fantasy"],
  language: "English",
  ratings: "PG-13",
  description: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
  cast: [
    {
      name: "Tom Holland",
      img: "http://via.placeholder.com/100x100",
    },
    {
      name: "Zendaya",
      img: "http://via.placeholder.com/100x100",
    },
    {
      name: "Jacon Batalon",
      img: "http://via.placeholder.com/100x100",
    }
  ]
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
