import AboutMeSection from "./home/AboutSection/AboutMeSection";
import { ThreeDCardDemo } from "./home/Card_Projects/ThreeDCard";
import Decides from "./home/DecidesSection/Decides";
import HeroContent from "./home/HeroContent/HeroContent";
import Marquee from "./home/Marquee/Marquee";
import Projects from "./home/ProjectSections/Projects";
import TeamSection from "./home/TeamSection/TeamSection";
import WebPrice from "./home/WebPriceSection/WebPrice";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={scss.content}>
      <HeroContent />
      <Marquee />
      <AboutMeSection />
      <Decides />
      <Projects />
      <TeamSection />
      <WebPrice />
      <ThreeDCardDemo />
    </div>
  );
};

export default HomePage;
