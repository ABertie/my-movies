import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faClapperboard, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="flex items-center justify-between shadow-footer px-12 py-6 text-xl bg-white dark:bg-black sticky inset-0 top-auto">
            <Link href="/movies" ><FontAwesomeIcon icon={faClapperboard} className="h-5" /><span className="sr-only">Movies</span></Link>
            <FontAwesomeIcon icon={faTicket} className="h-5" />
            <Link href="/favorits"><FontAwesomeIcon icon={faBookmark} className="h-5" /><span className="sr-only">Favorits</span></Link>
        </footer>
    )
}