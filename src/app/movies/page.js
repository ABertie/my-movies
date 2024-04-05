import InfoCard from "@/components/info-card";
import Section from "@/components/section";
import SliderCard from "@/components/slider-card";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faClapperboard, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { test } from "../layout";
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <header className="flex items-center justify-center p-6">
        <p className="font-serif text-indigo-dark font-bold text-2xl">MyMovies</p>
      </header>
      <main className="p-6 py-4">
        <Section header={"Now Showing"}>
          <div className="flex">
            <SliderCard id={test?.id} movie={test} />
          </div>
        </Section>
        <Section header={"Popular"}>
          <div className="flex flex-col">
            <InfoCard id={test?.id} movie={test} />
          </div>
        </Section>
      </main>
      <footer className="flex items-center justify-between shadow-footer px-12 py-6 text-xl bg-white fixed inset-0 top-auto">
        <Link href="/movies"><FontAwesomeIcon icon={faClapperboard} className="h-5" /></Link>
        <FontAwesomeIcon icon={faTicket} className="h-5" />
        <FontAwesomeIcon icon={faBookmark} className="h-5" />
      </footer>
    </>
  )
}
