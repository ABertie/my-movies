import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./globals.css";
import { faArrowLeft, faClapperboard, faTicket } from "@fortawesome/free-solid-svg-icons";
import Switch from "@/componets/switch";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export const metadata = {
  title: "MyMovies",
  description: "New movies comming up",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        <header className="flex items-center justify-between h-12">
          <FontAwesomeIcon icon={faArrowLeft} className="text-black h-1/2 invisible" />
          <h1>MyMovies</h1>
          <Switch />
        </header>
        {children}
        <footer className="flex items-center justify-between px-6 py-4 fixed inset-0 top-auto">
          <FontAwesomeIcon icon={faClapperboard} className="h-5" />
          <FontAwesomeIcon icon={faTicket} className="h-5" />
          <FontAwesomeIcon icon={faBookmark} className="h-5" />
        </footer>
      </body>
    </html>
  )
}
