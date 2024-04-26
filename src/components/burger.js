"use client"

import { faBarsStaggered, faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import InfoCard from "./info-card"
import getMovies from "@/hooks/get-movies"
import Get from "@/lib/get"

export default function Burger() {
    const { response: gerneRes, error: genreError, loading: genreLoad } = getMovies("/genre/movie/list")
    const [search , setSearch] = useState("")
    const [result, setResult] = useState([])
    const [show, setShow] = useState(false)
    
    function clickHandler(event) {
        const Input = event.target
        if (Input.checked === true) {
            setShow(true)
        }
        else if (Input.checked === false) {
            setShow(false)
        }
    }
    
    async function searchHandler(event) {
        setSearch(event.target.value.replace(" ", "+"))
        setResult(await Get(`/search/movie?language=en-US&query=${search}`))
        // console.log(result);
    }

    return (
        <>
            {!show
            ? ""
            : <div className="absolute z-40 w-10/12 bg-grey-mid dark:bg-indigo-dark left-0 top-0 rounded-r-xl rounded-b-xl">
                <label className="m-6 ml-16 flex items-center justify-center bg-white">
                    <FontAwesomeIcon icon={faSearch} className="text-indigo-dark p-1"/>
                    <input type="search" className="bg-transparent w-full text-black outline-none " onChange={searchHandler}/>
                </label>
                <ul className="flex flex-col p-4 gap-2">
                    {result?.data?.results?.map(object => <li key={object.id}><InfoCard movie={object} genres={gerneRes.genres}/></li>)}
                </ul>
            </div>}
            <label className="absolute z-50 left-6 top-6 flex justify-center items-center">
                <input id="burger" type="checkbox" onChange={clickHandler} className="hidden" />
                <FontAwesomeIcon icon={faBarsStaggered} className="text-xl" />
                <span className="sr-only">menu</span>
            </label>
        </>
    )
}