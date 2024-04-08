"use client"

import { useEffect, useState } from "react";

export default function useMovies() { 
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

//   const response = await fetch();
//   const movies = await response.json();

    const key = process.env.MY_MOVIES_API_KEY

    async function getData() {
        try {
            // throw new Error("This in an error")
            const RESPONSE = await fetch(`https://api.themoviedb.org/3/movie/11?api_key=${key}`)
            setResponse(await RESPONSE.json())
        } 
        catch {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    
    useEffect(function() {
        getData()
    }, [])

    return { response, error, loading }
}