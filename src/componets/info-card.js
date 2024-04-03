import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function InfoCard() {
    return (
        <div className="flex">
            <img src="http://via.placeholder.com/125x180" />
            <div>
                <p>lorem lorem lorem</p>
                <div className="flex items-center">
                    <FontAwesomeIcon icon={faStar} className="h-4" color="gold" />
                    10/10 iMDb
                </div>
                <ul className="flex gap-1">
                    <li>lorem</li>
                    <li>lorem</li>
                    <li>lorem</li>
                </ul>
                <time>1h 47m</time>
            </div>
        </div>
    )
}