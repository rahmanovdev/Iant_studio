import AboutMeSection from "./home/AboutSection/AboutMeSection";
import HeroContent from "./home/HeroContent/HeroContent";
import scss from "./HomePage.module.scss";
const HomePage = () => {
  return (
    <div className={scss.content}>
      <HeroContent />
      <AboutMeSection />
    </div>
  );
};

export default HomePage;
