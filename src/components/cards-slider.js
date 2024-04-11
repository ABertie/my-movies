"use client"

import useMovies from "@/hooks/use-movies"
import Section from "./section"
import SliderCard from "./silder-card"

export default function Slider({ url }) {
    const { response, error, loading } = useMovies(url)
    console.log(response);
    return (
        <>
            {error && <p>{error}</p>}
            <Section header="Now Showing" className="*:first:px-6">
                <div className="overflow-x-scroll scroll-px-4 pb-4 snap-x">
                    <div className="flex w-max gap-4">
                        {response?.results?.map(movie => <SliderCard key={movie.id} movie={movie} />)}
                    </div>
                </div>
            </Section>
        </>
    )
}