import Button from "./button";
import Heading from "./headers";

export default function Section({ header, children }) {
    return (
        <section>
            <div className="flex items-center justify-between pb-2">
                <Heading>{header}</Heading>
                <Button>See more</Button>
            </div>
            {children}
        </section>
    )
}