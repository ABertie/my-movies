export default function Video({video}) {
    return(
        <iframe src={`https://www.youtube-nocookie.com/embed/${video}?autoplay=1&rel=0&controls=0&showinfo=0&loop=1`}
        allowFullScreen className="w-full h-52"></iframe>
    )
}