import dynamic from "next/dynamic";
import scss from "./OurServicesPage.module.scss";

const OurServices = dynamic(() => import("./our_services/OurServices"), {
  loading: () => <p></p>,
});

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
