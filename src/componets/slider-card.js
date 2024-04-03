import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SliderCard() {
    return (
        <div className="flex flex-col">
            <img src="http://via.placeholder.com/150x220" />
            <p>lorem lorem lorem</p>
            <div className="flex items-center">
                <FontAwesomeIcon icon={faStar} className="h-4" color="gold" />
                10/10 iMDb
            </div>
        </div>
    )
}