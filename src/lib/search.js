import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3"

export default async function Search(value) {

    const key = process.env.NEXT_PUBLIC_MY_MOVIES_API_KEY

    try {
        const RESPONSE = await axios.get(`/search/movie?api_key=${key}&language=en-US&query=${value}`)
        return RESPONSE.data.results
    }
    catch (errors){
        console.log(errors);
    }
}