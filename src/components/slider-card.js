import Link from "next/link";
import Stars from "./star";

export default function SliderCard({movie, id}) {
    return (
        <Link href={`/movies/${id}`} className="flex flex-col relative gap-2 w-36">
            <img src={movie?.img} className="shadow-movie h-52"/>
            <img src={movie?.img} className="absolute inset-x-2 top-20 -z-10 blur-xl opacity-60 w-[8rem] h-1/2 "/>
            <p className="font-bold">{movie?.title}</p>
            <Stars>{movie?.stars}</Stars>
        </Link>
    )
}