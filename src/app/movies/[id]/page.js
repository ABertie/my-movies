import CastMember from "@/components/cast-card";
import Heading from "@/components/headers";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { test } from "../../layout";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import Stars from "@/components/star";
import ButtonLookingLink from "@/components/link";
import Link from "next/link";

export default function Movieinfo({ params }) {
    // console.log(test.id)
    // console.log(params.id);
    return (
        <>
            <header className="p-6 absolute inset-0 bottom-auto ">
                <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className="text-xl text-white" /></Link>
            </header>
            {/* <video></video> */}
            <div className="bg-[url('http://via.placeholder.com/100x100')] 
            h-52 bg-center bg-no-repeat bg-cover"></div>
            <section className="flex flex-col gap-3 p-6 py-8 bg-white absolute top-48 inset-0 bottom-auto rounded-xl">
                <div className="flex justify-between gap-12">
                    <Heading level="1">{test?.title}</Heading>
                    <FontAwesomeIcon icon={faBookmark} className="text-lg pt-2" />
                </div>
                <Stars>{test?.stars}</Stars>
                <ul className="flex gap-2 gap-y-0">
                    {test?.themes?.map(theme =>
                        <li key={theme}><ButtonLookingLink theme={true}>{theme}</ButtonLookingLink></li>
                    )}
                </ul>
                <div className="flex justify-between text-sm">
                    <div className="flex flex-col">
                        <Heading level="3">Length</Heading>
                        <time className="font-semibold">{test?.time}</time>
                    </div>
                    <div className="flex flex-col">
                        <Heading level="3">Language</Heading>
                        <p className="font-semibold">{test.language}</p>
                    </div>
                    <div className="flex flex-col">
                        <Heading level="3">Ratings</Heading>
                        <p className="font-semibold">{test?.ratings}</p>
                    </div>
                </div>
                <div className="py-2">
                    <Heading>Description</Heading>
                    <p className="text-grey-dark text-sm leading-6 pt-1">{test?.description}</p>
                </div>
                <div>
                    <div className="flex justify-between">
                        <Heading>Cast</Heading>
                        <ButtonLookingLink>See more</ButtonLookingLink>
                    </div>
                    <ul className="flex basis-1/4 gap-3">
                        {test?.cast?.map(member =>
                            <CastMember key={member?.name} CastMember={member} />
                        )}
                    </ul>
                </div>
            </section>
        </>
    )
}