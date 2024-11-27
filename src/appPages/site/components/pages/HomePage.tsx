import AboutMeSection from "./home/AboutSection/AboutMeSection";
// import Decides from "./home/DecidesSection/Decides";
import Questions from "./home/AnswersForQuestion.tsx/Questions";
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
      {/* <Decides /> */}
      <Projects />
      <TeamSection />
      <div
        style={{ padding: "20px", backgroundColor: "#121212", width: "100%" }}
      >
        <Questions />
      </div>
      <WebPrice />
    </div>
  );
};

export default HomePage;
