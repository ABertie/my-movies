"use client"

import Heading from "@/components/headers";
import { faArrowLeft, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Stars from "@/components/star";
import ButtonLookingLink from "@/components/link";
import Link from "next/link";
import useMovies from "@/hooks/use-movies";
import Time from "@/components/time";
import Section from "@/components/section";

export default function Movieinfo({ params }) {
    const { response, error, loading } = useMovies(`/movie/${params.id}`, "&append_to_response=videos,credits")
    // response && console.log(response);

    let video
    response?.videos?.results?.forEach(e => {if (e.type === "Trailer") video = e.key})

    return (
        <>
            {error && <p>{error}</p>}
            {!loading ?
                <>
                    <header className="p-6 absolute z-20 inset-0 bottom-auto ">
                        <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white" /></Link>
                    </header>
                    {!response?.videos?.results[0]
                        ? <img src={`https://image.tmdb.org/t/p/w500${response?.poster_path}`} className="absolute -top-20" />
                        : <iframe className="w-full h-52" title="YouTube video player"
                            src={`https://www.youtube.com/embed/${video}`} ></iframe>}
                    <section className="flex flex-col gap-3 p-6 py-8 bg-white dark:bg-black absolute top-48 inset-0 bottom-auto rounded-xl">
                        <div className="flex justify-between gap-12">
                            <Heading level="1">{!response?.title ? response?.name : response?.title}</Heading>
                            <FontAwesomeIcon icon={faBookmark} className="text-lg pt-2" />
                        </div>
                        <Stars>{response?.vote_average}</Stars>
                        <ul className="flex flex-wrap gap-2 gap-y-0">
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
                            <p className="text-grey-dark text-sm leading-6 pt-1">{response?.description}</p>
                        </div>
                        <Section header="Cast">
                            <ul className="grid grid-cols-4 gap-3">
                                {response?.credits?.cast?.map(cast =>
                                    <li key={cast.id} className="w-full text-indigo-dark dark:text-indigo-light text-xs font-semibold">
                                        <div className="aspect-square overflow-hidden rounded-lg relative">
                                            <img src={`https://image.tmdb.org/t/p/original/${cast?.profile_path}`} className="absolute -top-2" />
                                        </div>
                                        <p>{cast?.name}</p>
                                    </li>
                                )}
                            </ul>
                        </Section>
                    </section>
                </>
                : <div className="flex justify-center pt-20">
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                    {/* <i class="fa-solid fa-snowflake fa-spin fa-spin-reverse text-[3rem] text-primary-dark"></i> */}
                </div>
            }
        </>
    )
}