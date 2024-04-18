import Link from "next/link";

export default function ButtonLookingLink({ children, genre }) {
    return(
        <div className={`text-grey-mid border-grey-mid px-2 py-1 rounded-full 
        ${genre === true 
            ? "uppercase text-sea-dark bg-sea-light text-[10px] px-3" 
            : "border border-1 text-xs" }`}>{children}</div>
    )
}