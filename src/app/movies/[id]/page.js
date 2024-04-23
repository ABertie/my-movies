"use client"

import Heading from "@/components/headers";
import { faArrowLeft, faPlay, faSpinner, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Stars from "@/components/star";
import ButtonLookingLink from "@/components/link";
import Link from "next/link";
import Time from "@/components/time";
import Section from "@/components/section";
import { useState } from "react";
import Video from "@/components/video";
import getMovies from "@/hooks/get-movies";

export default function Movieinfo({ params }) {
    const { response, error, loading } = getMovies(`/movie/${params.id}`, "&append_to_response=videos,credits")
    const [click, setClick] = useState(false)

    function clickHandler() {
        setClick(true)
    }

    let video
    response?.videos?.results?.forEach(e => { if (e.type === "Trailer") video = e.key })

    return (
        <>
            {error && <p>{error}</p>}
            {!loading ?
                <>
                    <header className="p-6 absolute z-20 inset-0 bottom-auto ">
                        <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white" /><span className="sr-only">back</span></Link>
                    </header>
                    {!video
                        ? <img loading="lazy" alt={response?.title + " poster"} src={`https://image.tmdb.org/t/p/w500${response?.backdrop_path}`} className="rounded-none" />
                        : !click
                            ? <div className="flex items-center justify-center">
                                <img loading="lazy" alt={response?.title + " poster"} src={`https://image.tmdb.org/t/p/w500${response?.backdrop_path}`} className="rounded-none" />
                                <button onClick={clickHandler} className="absolute flex flex-col justify-center items-center text-white">
                                    <FontAwesomeIcon icon={faPlay} className="text-xl text-indigo-dark bg-white p-3 aspect-square rounded-full" />
                                    <p>Play Trailer</p>
                                </button>
                            </div>
                            : <Video video={video}/>
                    }
                    <main className="flex flex-col gap-3 p-6 py-8 bg-white dark:bg-black absolute top-48 inset-0 bottom-auto rounded-xl">
                        <div className="flex justify-between gap-12">
                            <Heading level="1">{!response?.title ? response?.name : response?.title}</Heading>
                            <FontAwesomeIcon icon={faBookmark} className="text-lg pt-2" />
                        </div>
                        <Stars>{response?.vote_average}</Stars>
                        <ul className="flex flex-wrap gap-2 gap-y-1">
                            {response?.genres?.map(genre =>
                                <li key={genre.id}><ButtonLookingLink genre={true}>{genre.name}</ButtonLookingLink></li>
                            )}
                        </ul>
                        <div className="flex justify-between text-sm">
                            <div className="flex flex-col">
                                <Heading level="3">Length</Heading>
                                <Time movie={response} className="font-semibold" />
                            </div>
                            <div className="flex flex-col">
                                <Heading level="3">Language</Heading>
                                <p className="font-semibold">{response.spoken_languages[0].name}</p>
                            </div>
                            <div className="flex flex-col">
                                <Heading level="3">Vote Amount</Heading>
                                <p className="font-semibold">{response?.vote_count}</p>
                            </div>
                        </div>
                        <div className="py-2">
                            <Heading>Description</Heading>
                            <p className="text-grey-dark text-sm leading-6 pt-1">{response?.overview}</p>
                        </div>
                        <Section header="Cast">
                            <ul className="grid grid-cols-4 gap-3">
                                {response?.credits?.cast?.map(cast =>
                                    <li key={cast.id} className="w-full text-indigo-dark dark:text-indigo-light text-xs font-semibold">
                                        <div className="aspect-square flex justify-center overflow-hidden rounded-lg relative">
                                            {cast?.profile_path === null
                                                ? <FontAwesomeIcon icon={faUser} className="text-6xl" />
                                                : <img alt={"images of " + cast?.name} src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`} className="absolute -top-2" />}
                                        </div>
                                        <p>{cast?.name}</p>
                                    </li>
                                )}
                            </ul>
                        </Section>
                    </main>
                </>
                : <div className="flex justify-center pt-20">
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin text-3xl" />
                </div>
            }
        </>
    )
}