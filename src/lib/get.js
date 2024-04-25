
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default async function Get(source) {

    const key = process.env.NEXT_PUBLIC_MY_MOVIES_ACCESS_TOKEN

    try {
        // throw new Error("This in an error")
        const RESPONSE = await axios.get(`${source}`,
        {headers: {
            Authorization: "Bearer " + key
        }})
        return RESPONSE
    }
    catch (error) {
        console.error(error)
        return null
    }

}