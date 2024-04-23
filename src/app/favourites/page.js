"use client"

import getIds from "@/actions/get-ids";
import Footer from "@/components/footer";
import getMovies from "@/hooks/get-movies";
import { useEffect, useState } from "react";

export default function favorits() {
    // const { response: gerneRes, error: genreError, loading: genreLoad } = getMovies("/genre/movie/list")
    // const { response, error, loading } = getMovies(`/account/${ids}/favorite/movie/`) // "&page=1&sort_by=created_at.asc"
    const [ids, setIds] = useState()
    // console.log(loading);
    async function init() {
      setIds(await getIds()) 
    // await getIds().then(ids => console.log(ids))
      console.log(ids);
    }
  
    useEffect(function() {
      init()
    }, [])

    return (
        <>
            <main className="min-h-screen">
                <p className="flex items-center justify-center h-52">you have no favorits jet</p>
                {/* <InfoCard key={movie.id} movie={movie} genres={gerneRes.genres}/> */}
            </main>
            <Footer />
        </>
    )
}