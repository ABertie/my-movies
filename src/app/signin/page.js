"use client"

import Footer from "@/components/footer"
import getMovies from "@/hooks/get-movies"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SigninPage() {
  const [token, setToken] = useState(null)
  const { response, error, loading } = getMovies("authentication/token/new")

  useEffect(function () {
    setToken(response.request_token)
  }, [response])

  return (
    <>
      {error && <p>{error}</p>}
      {!loading
        ? <div>
          <header className="flex items-center justify-center p-6">
            <p className="font-serif text-indigo-dark dark:text-indigo-light font-bold text-2xl">MyMovies</p>
          </header>
          <main className="p-6 min-h-screen">
            <Link className="border-indigo-dark dark:border-indigo-light border-2 rounded-full p-4 block text-center" href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}>Sign in with TMDB</Link>
          </main>
          <Footer />
        </div>
        : <div className="flex justify-center pt-20">
          <FontAwesomeIcon icon={faSpinner} className="fa-spin text-3xl" />
        </div>
      }
    </>
  )
}