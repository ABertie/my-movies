import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Stars({ children }) {
    return (
        <div className="flex items-center text-grey-dark gap-1 text-sm">
            <FontAwesomeIcon icon={faStar} className="text-gold text-xs" />
            {children}/10 IMDb
        </div>
    )
}