"use client"

import { useEffect, useState } from "react"

export default function Switch() {
    const [theme, setTheme] = useState()

    useEffect(function checkHandler() {
        
    }, [theme])

    return (
        <label className="absolute z-50 right-6 top-6 flex justify-center items-center py-1">
            <input type="checkbox" className="peer invisible absolute z-10" name="switch" /> {/* missin checked and onChange*/}
            <span className="block rounded-full w-9 h-5 p-[0.11rem] bg-grey-mid relative
            after:content-[''] after:bg-white after:right-4.5 after:absolute after:h-4 after:aspect-square after:rounded-full
            peer-checked:after:right-0.5"></span> {/* after:transition-[right] after:duration-500 */}
        </label>
    )
}