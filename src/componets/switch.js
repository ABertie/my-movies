"use client"

import { useEffect, useState } from "react"

export default function Switch() {
    const [theme, setTheme] = useState()

    useEffect(function checkHandler() {
        
    }, [theme])

    return (
        <div>
            <input type="checkbox" className="invisible" name="switch" /> {/* missin checked and onChange*/}
            <span className=""></span>
        </div>
    )
}