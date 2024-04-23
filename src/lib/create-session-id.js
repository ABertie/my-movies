import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default async function createSessionId(request_token) {
    
    const key = process.env.NEXT_PUBLIC_MY_MOVIES_ACCESS_TOKEN
    
        try {
            // throw new Error("This in an error")
            const RESPONSE = await axios.post(
                "/authentication/session/new", 
                {request_token: request_token},
                {headers: {
					Authorization: "Bearer " + key
				}})
            return RESPONSE.data.session_id
        }
        catch (error) {
            console.error(error)
            return null
        }

}