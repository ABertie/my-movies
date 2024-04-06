"use client"

import { useEffect } from "react"

export default function Switch() {
    
    useEffect(function () {
        const Input = document.querySelector('#switch')
        const HTML = document.querySelector("html")

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            localStorage.setItem('theme', 'dark')
            Input.checked = true
            localStorage.theme = 'dark'
            HTML.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            Input.checked = false
            localStorage.theme = 'light'
            HTML.classList.remove('dark')
        }
    }, [])

    function checkHandler() {
        const Input = document.querySelector('#switch')
        const HTML = document.querySelector("html")
    
        if (Input.checked === true) {
            localStorage.theme = 'dark'
            HTML.classList.add('dark')
            return
        }
        else if (Input.checked === false) {
            localStorage.theme = 'light'
            HTML.classList.remove('dark')
            return
        }
    }

    return (
        <label className="absolute z-50 right-6 top-6 flex justify-center items-center py-1">
            <input type="checkbox" className="peer invisible absolute z-10" id="switch" name="switch" onChange={checkHandler}/>
            <span className="block rounded-full w-9 h-5 p-[0.11rem] bg-grey-mid dark:bg-white relative
            after:content-[''] after:bg-white dark:after:bg-black after:right-4.5 after:absolute after:h-4 after:aspect-square after:rounded-full
            peer-checked:after:right-0.5"></span> {/* after:transition-[right] after:duration-500 */}
        </label>
    )
}