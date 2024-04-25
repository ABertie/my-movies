"use client"

import createAccountCookie from "@/actions/create-account-cookie"
import createSessionCookie from "@/actions/create-session-cookie"
import Get from "@/lib/get"
import Post from "@/lib/post"
import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"

export default function ApprovedPage() {
	const searchParams = useSearchParams()
	const router = useRouter()
    
	async function init(request_token) {
        const session_id = await (await Post("/authentication/session/new", {request_token: request_token})).data.session_id
		await createSessionCookie(session_id)
		const account = await (await Get(`/account?language=en-US&session_id=${session_id}`)).data
        await createAccountCookie(account)
		return router.push("/favorits")
	}

	useEffect(function() {
		const request_token = searchParams.get("request_token")
		
		if (!request_token) {
			return router.push("/signin")
		}
	
		init(request_token)
	}, [])

	return null
}