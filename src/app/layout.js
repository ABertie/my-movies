import "./globals.css";
import { Yrsa, Mulish } from 'next/font/google'

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import Switch from "@/components/switch";

export const metadata = {
  title: "MyMovies",
  description: "New movies comming up",
}
const merriweather = Yrsa({
  subsets: ['latin'],
  variable: '--font-merriweather',
})

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
})

export const test = {
  id: "test",
  title: "Spiderman: No Way Home",
  stars: "10",
  img: "https://pics.filmaffinity.com/spider_man_no_way_home-642739124-large.jpg",
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
      <body className={`${merriweather.variable} ${mulish.variable} font-sans relative`}>
        <Switch />
        {children}
      </body>
    </html>
  )
}
