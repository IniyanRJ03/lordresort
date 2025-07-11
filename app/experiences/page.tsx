import ExperiencesHero from "@/components/experiences/ExperiencesHero"
import Services from "@/components/home/Services"
import FeaturedExperiences from "@/components/experiences/FeaturedExperiences"
import Gallery from "@/components/experiences/Gallery"
import BookExperiences from "@/components/experiences/BookExperiences"

export default function ExperiencePage(){
    return(
        <>
            <ExperiencesHero/>
            <Services/>
            <FeaturedExperiences/>
            <Gallery/>
            <BookExperiences/>
        </>
    )
}