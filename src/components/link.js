export default function ButtonLookingLink({ children, genre }) {
    return(
        <button className={`text-grey-mid border-grey-mid px-2 h-6 rounded-full 
        ${genre === true 
            ? "uppercase text-sea-dark bg-sea-light text-[10px] px-3" 
            : "border border-1 text-xs" }`}>{children}</button>
    )
}