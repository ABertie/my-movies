import ButtonLookingLink from "./link";
import Stars from "./star";
import Link from "next/link";
import Time from "./time";

export default function InfoCard({movie}) {
    return (
        <Link href={`/movies/${movie.id}`} className="flex gap-4">
            <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} className="w-24 h-full" /> {/*  ? w-[30%] */}
            <div className="flex flex-col gap-1">
                <p className="font-bold">{movie?.title}</p>
                <Stars>{movie?.vote_average}</Stars>
                <ul className="flex flex-wrap gap-y-0 gap-1">
                    {movie?.genres?.map(theme => 
                        <li key={theme.id}><ButtonLookingLink theme={true}>{theme.name}</ButtonLookingLink></li>
                    )}
                </ul>
                <Time movie={movie}/>
            </div>
        </Link>
    )
}