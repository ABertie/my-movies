import InfoCard from "@/componets/info-card";
import Section from "@/componets/section";
import SliderCard from "@/componets/slider-card";

export default function Home() {
  return (
      <main>
        <Section header={"Now Showing"}>
          <div className="flex">
            <SliderCard />
          </div>
        </Section>
        <Section header={"Poular"}>
          <div className="flex flex-col">
            <InfoCard />
          </div>
        </Section>
      </main>
  )
}
