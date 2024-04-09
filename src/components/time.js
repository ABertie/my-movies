import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Time({movie, className}) {
    return (
        <div className={`flex gap-1 text-sm ${className}`}>
            <FontAwesomeIcon icon={faClock} className="text-[10px] self-center" />
            {movie?.runtime 
            ? <time>{Math.trunc(movie?.runtime / 60)}h {movie?.runtime % 60}m</time>
            : <data>{movie?.release_date}</data>
        }
        </div>
    )
}