import List from "@/components/cards-list";
import Slider from "@/components/cards-slider";
import Footer from "@/components/footer";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Movies() {
  return (
    <>
      <header className="flex items-center justify-center p-6">
        <p className="font-serif text-indigo-dark dark:text-indigo-light font-bold text-2xl">MyMovies</p>
      </header>
      <main className="py-4 flex flex-col justify-center">
        {/* <FontAwesomeIcon icon={faSpinner} className="fa-spin" /> */}
        <Slider url={["/movie/now_playing"]} />
        <List url={["/movie/popular"]} />
      </main>
      <Footer />
    </>
  )
}
