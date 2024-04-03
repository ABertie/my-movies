export default function Section({ header, children }) {
    return (
        <section>
            <div className="flex items-center justify-between">
                <h2>{header}</h2>
                <button>See more</button>
            </div>
            {children}
        </section>
    )
}