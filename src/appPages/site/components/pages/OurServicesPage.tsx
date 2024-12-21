import dynamic from "next/dynamic";
import scss from "./OurServicesPage.module.scss";
import ServicesV2 from "./our_services/ServicesV2";

const OurServices = dynamic(() => import("./our_services/ServicesV2"), {
  loading: () => <p></p>,
});

const OurServicesPage = () => {
  return (
    <>
      <div className={scss.content}>
        {/* <OurServices /> */}
        <ServicesV2 />
      </div>
    </>
  );
};

export default OurServicesPage;
