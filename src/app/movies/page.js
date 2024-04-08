import InfoCard from "@/components/info-card";
import Section from "@/components/section";
import SliderCard from "@/components/slider-card";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faClapperboard, faSpinner, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { test } from "../layout";
import Link from "next/link";

export default function Movies() {
  // const { response, error, loading } = useMovies()
  // console.log(response);

  return (
    <>
      {/* {error && <p>{error}</p>}
      {!loading ?
      <>  */}
      <header className="flex items-center justify-center p-6">
        <p className="font-serif text-indigo-dark dark:text-indigo-light font-bold text-2xl">MyMovies</p>
      </header>
      <main className="py-4">
        <Section header={"Now Showing"} className="*:first:px-6">
          <div className="overflow-x-scroll scroll-px-4 pb-4 snap-x">
            <div className="flex w-max gap-4">
              <SliderCard id={test?.id} movie={test} />
              <SliderCard id={test?.id} movie={test} />
              <SliderCard id={test?.id} movie={test} />
              <SliderCard id={test?.id} movie={test} />
            </div>
          </div>
        </Section>
        <Section header={"Popular"} className="p-6 pt-4">
          <div className="flex flex-col">
            <InfoCard id={test?.id} movie={test} />
            <InfoCard id={test?.id} movie={test} />
            <InfoCard id={test?.id} movie={test} />
            <InfoCard id={test?.id} movie={test} />
          </div>
        </Section>
      </main>
      <footer className="flex items-center justify-between shadow-footer px-12 py-6 text-xl bg-white dark:bg-black fixed inset-0 top-auto">
        <Link href="/movies"><FontAwesomeIcon icon={faClapperboard} className="h-5" /></Link>
        <FontAwesomeIcon icon={faTicket} className="h-5" />
        <FontAwesomeIcon icon={faBookmark} className="h-5" />
      </footer>
      {/* </>
        : <div className="flex justify-center pt-20">
        <FontAwesomeIcon icon={faSpinner} className="fa-spin fa-spin-reverse"/> 
        <i class="fa-solid fa-snowflake fa-spin fa-spin-reverse text-[3rem] text-primary-dark"></i>
    </div>
    } */}
    </>
  )
}
