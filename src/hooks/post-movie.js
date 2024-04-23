"use client"

import axios from "axios";
import { useEffect, useState } from "react";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default function postMovies(source, body) {
    const [response, setResponse] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const key = process.env.NEXT_PUBLIC_MY_MOVIES_API_KEY
    
    async function postData() {
        try {
            // throw new Error("This in an error")
            const RESPONSE = await axios.post(
                `${source}?api_key=${key}`, 
                body,
                )
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
        postData()
    }, [])

    return { response, error, loading }
}