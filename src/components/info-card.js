import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Stars from "./star";
import Link from "next/link";

export default function InfoCard({id, movie}) {
    return (
        <Link href={`/${id}`} className="flex gap-4">
            <img src={movie?.img} className="w-24 h-full" /> {/*  ? w-[30%] */}
            <div className="flex flex-col gap-1">
                <p className="font-bold">{movie?.title}</p>
                <Stars>{movie?.stars}</Stars>
                <ul className="flex flex-wrap gap-y-0 gap-1">
                    {movie?.themes?.map(theme => 
                        <li key={theme}><Button theme={true}>{theme}</Button></li>
                    )}
                </ul>
                <div className="flex gap-1 text-sm">
                    <FontAwesomeIcon icon={faClock} className="text-[10px] self-center"/>
                    <time>{movie?.time}</time>
                </div>
            </div>
        </Link>
    )
}