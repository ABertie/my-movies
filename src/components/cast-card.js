export default function CastMember({CastMember}) {
    return (
        <li className="w-full aspect-square text-indigo-dark dark:text-indigo-light text-xs font-semibold">
            <img src={CastMember?.img} />
            <p>{CastMember?.name}</p>
        </li>
    )
}