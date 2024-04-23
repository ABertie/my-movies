"use client"

import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default function getMovies(source, add) {
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const key = process.env.NEXT_PUBLIC_MY_MOVIES_API_KEY
    
    async function getData() {
        try {
            // throw new Error("This in an error")
            const RESPONSE = await axios.get(`${source}?api_key=${key}&language=en-US${!add ? "" : add}`)
            setResponse(RESPONSE.data)
        }
        catch {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }

    useEffect(function () {
        getData()
    }, [])

    return { response, error, loading }
}