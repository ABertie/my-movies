"use client"

import getIds from "@/actions/get-ids";
import Get from "@/lib/get";
import Post from "@/lib/post";
import { faBookmark as unmarked } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as marked } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Bookmark({ movieId }) {
    const [loading, setLoading] = useState(true)
    const [isFav, setIsFav] = useState(false)
    const [message, setMessage] = useState(false)

    async function init() {
        const ids = await getIds()
        if (!ids == false) {
            const fav = await Get(`/account/${ids.account_id}/favorite/movies?language=en-US`)
            fav.data.results.forEach(result => {result.id == movieId && setIsFav(true)})
        }
        setLoading(false)
    }

    useEffect(function () {
        init()
    }, [])

    async function clickHandler(event) {
        setLoading(true)
        try {
            const ids = await getIds()
            const response = await Post(`/account/${ids.account_id}/favorite`, {media_type: 'movie', media_id: movieId, favorite: !isFav})
            if (response.data.success) setIsFav(!isFav)
        } catch (error) {
            setMessage(true)
        }
        setLoading(false)
    }

    return (
        <>
            {!loading
                ? !message
                    ? <button onClick={clickHandler}>
                        <FontAwesomeIcon icon={isFav ? marked : unmarked} className="text-lg pt-2" />
                    </button>
                    : <p className="text-end">you need to sign in</p>
                : <FontAwesomeIcon icon={faSpinner} className="fa-spin text-lg" />}
        </>
    )
}