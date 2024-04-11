"use client"

import useMovies from "@/hooks/use-movies"
import Section from "./section"
import InfoCard from "./info-card"

export default function List({ url }) {
    const { response, error, loading } = useMovies(url)
    console.log(response);
    return (
        <>
            {error && <p>{error}</p>}
            <Section header="Popular" className="p-6 pt-4">
                <div className="flex flex-col gap-4">
                    {response?.results?.map(movie => <InfoCard key={movie.id} movie={movie} />)}
                </div>
            </Section>
        </>
    )
}