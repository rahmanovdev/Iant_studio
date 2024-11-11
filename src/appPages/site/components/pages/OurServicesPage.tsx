import OurServices from "./our_services/OurServices";
import scss from "./OurServicesPage.module.scss";

const OurServicesPage = () => {
  return (
    <>
      <div className={scss.content}>
        <OurServices />
      </div>
    </>
  );
};

export default OurServicesPage;
