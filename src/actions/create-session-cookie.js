"use server"
import { cookies } from "next/headers"

export default async function createSessionCookie(token) {
	cookies().set("TMDB_SID", token)
}