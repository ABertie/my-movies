"use server"

import { cookies } from "next/headers"

export default async function getIds() {
	const session_id = cookies().get("TMDB_SID") 
	const account = JSON.parse(cookies().get("TMDB_ACCOUNT").value) 

	return {
		session_id: session_id.value,
		account_id: account.id,
	}
}