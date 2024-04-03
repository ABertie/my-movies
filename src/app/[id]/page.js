import CastMember from "@/componets/cast-card";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movieinfo() {
    return (
        <>
            <video></video>
            <section>
                <div className="flex justify-between">
                    <h2>lorem lorem lorem</h2>
                    <FontAwesomeIcon icon={['far', 'bookmark']} />
                </div>
                <div className="flex">
                    <FontAwesomeIcon icon={faStar} color="gold" />
                    10/10 iMDb
                </div>
                <ul className="flex">
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <div className="flex flex-col">
                    <span>Length</span>
                    <time>2h 28min</time>
                </div>
                <div className="flex flex-col">
                    <span>Language</span>
                    <p>English</p>
                </div>
                <div className="flex flex-col">
                    <span>Ratings</span>
                    <p>PG-13</p>
                </div>
                <h3>Description</h3>
                <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                <div>
                    <div>
                        <h3>Cast</h3>
                        <button>See more</button>
                    </div>
                    <ul className="flex">
                        <CastMember />
                        <CastMember />
                        <CastMember />
                    </ul>
                </div>
            </section>
        </>
    )
}