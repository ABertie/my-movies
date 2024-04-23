"use client"

import Burger from "@/components/burger";
import Footer from "@/components/footer";
import InfoCard from "@/components/info-card";
import Section from "@/components/section";
import SliderCard from "@/components/silder-card";
import getMovies from "@/hooks/get-movies";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movies() {
  const { response: showRes, error: showError, loading: showLoad } = getMovies("/movie/now_playing")
  const { response: popRes, error: popError, loading: popLoad } = getMovies("/movie/popular") 
  const { response: gerneRes, error: genreError, loading: genreLoad } = getMovies("/genre/movie/list")
  return (
    <>
      {showError}
      {popError}
      {!showLoad && !popLoad && !genreLoad
        ? <>
          <header className="flex items-center justify-center p-6">
            <Burger/>
            <p className="font-serif text-indigo-dark dark:text-indigo-light font-bold text-2xl">MyMovies</p>
          </header>
          <main className="py-4 flex flex-col justify-center">
            <Section header="Now Showing" className="*:first:px-6">
              <div className="overflow-x-scroll scroll-px-4 pb-4 snap-x">
                <div className="flex w-max gap-4">
                  {showRes?.results?.map(movie => <SliderCard key={movie.id} movie={movie} />)}
                </div>
              </div>
            </Section>
            <Section header="Popular" className="p-6 pt-4">
              <div className="flex flex-col gap-4">
                {popRes?.results?.map(movie => <InfoCard key={movie.id} movie={movie} genres={gerneRes.genres}/>)}
              </div>
            </Section>
          </main>
          <Footer />
        </>
        : <div className="flex h-40 items-center justify-center">
          <FontAwesomeIcon icon={faSpinner} className="fa-spin text-3xl" />
        </div>}
    </>
  )
}
