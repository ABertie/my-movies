import Link from "next/link";
import Stars from "./star";

export default function SliderCard({movie}) {
    return (
        <Link href={`/movies/${movie.id}`} className="flex flex-col relative gap-2 w-36 snap-start">
            <img loading="lazy" alt={movie?.title + " poster"} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} className="shadow-movie w-36 h-52"/>
            <img loading="lazy" alt="" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} className="absolute inset-x-2 top-16 -z-10 blur-xl opacity-60 w-[8rem] h-1/2 "/>
            <p className="font-bold">{movie?.title}</p>
            <Stars>{movie?.vote_average}</Stars>
        </Link>
    )
}