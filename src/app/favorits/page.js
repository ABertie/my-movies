"use client"

import getIds from "@/actions/get-ids";
import Footer from "@/components/footer";
import InfoCard from "@/components/info-card";
import getMovies from "@/hooks/get-movies";
import Get from "@/lib/get";
import { useEffect, useState } from "react";

export default function favorits() {
  const [favorits, setFavorits] = useState([])
  const { response: gerneRes, error: genreError, loading: genreLoad } = getMovies("/genre/movie/list")

  useEffect(function () {
    init()
  }, [])

  async function init() {
    const ids = await getIds()
    const response = await Get(`/account/${ids.account_id}/favorite/movies?language=en-US`)
    setFavorits(response?.data?.results)
  }

  return (
    <>
       <header className="flex items-center justify-center p-6">
            {/* <Burger/> */}
            <p className="font-serif text-indigo-dark dark:text-indigo-light font-bold text-2xl">Favorits</p>
          </header>
      <main className="min-h-screen flex flex-col gap-4 p-6">
        {favorits.length === 0
          ? <p className="flex items-center justify-center h-52">you have no favorits jet</p>
          : favorits?.map(movie => <InfoCard key={movie.id} movie={movie} genres={gerneRes.genres} />)
        }
      </main>
      <Footer />
    </>
  )
}