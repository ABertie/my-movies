import Link from "next/link";
import Stars from "./star";

export default function SliderCard({movie, id}) {
    return (
        <Link href={`/movies/${id}`} className="flex flex-col relative gap-2">
            <img src={movie?.img} className="shadow-movie w-36 h-52"/>
            <img src={movie?.img} className="absolute inset-x-1 top-20 -z-10 blur-xl w-[8.5rem] h-1/2 "/>
            <p className="font-bold">{movie?.title}</p>
            <Stars>{movie?.stars}</Stars>
        </Link>
    )
}