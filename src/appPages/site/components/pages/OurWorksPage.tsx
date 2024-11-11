import OurWorks from "./our_works/OurWorks";
import scss from "./OurWorksPage.module.scss";
const OurWorksPage = () => {
  return (
    <>
      <div className={scss.content}>
        <OurWorks />
      </div>
    </>
  );
};

export default OurWorksPage;
