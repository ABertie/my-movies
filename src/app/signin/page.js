"use client"

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
            ? <Link href={`https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/approved`}>Sign in with TMDB</Link>
            : <div className="flex justify-center pt-20">
            <FontAwesomeIcon icon={faSpinner} className="fa-spin text-3xl" />
        </div>
        }
    </>
  )
}