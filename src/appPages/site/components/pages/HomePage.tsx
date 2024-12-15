import dynamic from "next/dynamic";
import scss from "./HomePage.module.scss";

const HeroContent = dynamic(() => import("./home/HeroContent/HeroContent"), {
  loading: () => <p></p>,
});

const Marquee = dynamic(() => import("./home/Marquee/Marquee"), {
  loading: () => <p></p>,
});

const AboutMeSection = dynamic(
  () => import("./home/AboutSection/AboutMeSection"),
  {
    loading: () => <p></p>,
  }
);

const Projects = dynamic(() => import("./home/ProjectSections/Projects"), {
  loading: () => <p></p>,
});

const TeamSection = dynamic(() => import("./home/TeamSection/TeamSection"), {
  loading: () => <p></p>,
});

const CliComments = dynamic(
  () => import("./about_me/cli-comments/CliComments"),
  {
    loading: () => <p></p>,
  }
);

const Questions = dynamic(
  () => import("./home/AnswersForQuestion.tsx/Questions"),
  {
    loading: () => <p></p>,
  }
);

const WebPrice = dynamic(() => import("./home/WebPriceSection/WebPrice"), {
  loading: () => <p></p>,
});

const HomePage = () => {
  return (
    <div className={scss.content}>
      <HeroContent />
      <Marquee />
      <div className={scss.groupSection}>
        <AboutMeSection />
        <Projects />
      </div>
      <TeamSection />
      <CliComments />
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
