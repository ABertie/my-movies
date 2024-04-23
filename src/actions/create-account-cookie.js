"use server"
import { cookies } from "next/headers"

export default async function createAccountCookie(account) {
	cookies().set("TMDB_ACCOUNT", JSON.stringify(account))
}