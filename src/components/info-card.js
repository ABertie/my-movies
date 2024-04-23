import ButtonLookingLink from "./link";
import Stars from "./star";
import Link from "next/link";
import Time from "./time";

export default function InfoCard({movie, genres}) {
    return (
        <Link href={`/movies/${movie.id}`} className="flex gap-4">
            {!movie.poster_path
            ? ""
            : <img loading="lazy" alt={movie?.title + " poster"} src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} className="w-24 h-full" />}
            <div className="flex flex-col gap-1">
                <p className="font-bold">{movie?.title}</p>
                <Stars>{movie?.vote_average}</Stars>
                <ul className="flex flex-wrap gap-1">
                    {movie.genre_ids.map(t =>
                        genres?.map(g => 
                        g.id === t 
                        ? <li key={g.id}>
                            <ButtonLookingLink genre={true}>{g.name}</ButtonLookingLink>
                        </li> 
                        : ""
                    ))}
                </ul>
                <Time movie={movie}/>
            </div>
        </Link>
    )
}