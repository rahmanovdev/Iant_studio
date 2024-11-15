import AboutMeSection from "./home/AboutSection/AboutMeSection";
import Decides from "./home/DecidesSection/Decides";
import HeroContent from "./home/HeroContent/HeroContent";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={scss.content}>
      <HeroContent />
      <AboutMeSection />
      <Decides />
    </div>
  );
};

export default HomePage;
