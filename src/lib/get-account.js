
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default async function getAccount(session_id) {

    const key = process.env.NEXT_PUBLIC_MY_MOVIES_API_KEY

    try {
        // throw new Error("This in an error")
        const RESPONSE = await axios.get(`/account?api_key=${key}&language=en-US&session_id=${session_id}`)
        return RESPONSE.data
    }
    catch (error) {
        console.error(error)
        return null
    }

}