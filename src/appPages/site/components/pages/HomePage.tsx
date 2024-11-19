import AboutMeSection from "./home/AboutSection/AboutMeSection";
import Decides from "./home/DecidesSection/Decides";
import HeroContent from "./home/HeroContent/HeroContent";
import Projects from "./home/ProjectSections/Projects";
import TeamSection from "./home/TeamSection/TeamSection";
import WebPrice from "./home/WebPriceSection/WebPrice";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={scss.content}>
      <HeroContent />
      <AboutMeSection />
      <Decides />
      <Projects />
      <TeamSection />
      <WebPrice />
    </div>
  );
};

export default HomePage;
