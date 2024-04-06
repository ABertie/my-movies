import ButtonLookingLink from "./link";
import Heading from "./headers";

export default function Section({ header, children, className }) {
    return (
        <section className={className}>
            <div className="flex items-center justify-between pb-2">
                <Heading>{header}</Heading>
                <ButtonLookingLink>See more</ButtonLookingLink>
            </div>
            {children}
        </section>
    )
}