import Heading from "./headers";
import ButtonLookingLink from "./link";

export default function CastMembers({ movie }) {
    return (
        <>
            <div className="flex justify-between">
                <Heading>Cast</Heading>
                <ButtonLookingLink>See more</ButtonLookingLink>
            </div>
            
        </>
    )
}