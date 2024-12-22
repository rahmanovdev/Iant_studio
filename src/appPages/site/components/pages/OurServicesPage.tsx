import dynamic from "next/dynamic";
import scss from "./OurServicesPage.module.scss";
import OrderSite from "@/ui/orderSite/OrderSite";
import Feedback from "./about_me/feedback/Feedback";

const ServicesV2 = dynamic(() => import("./our_services/ServicesV2"), {
  loading: () => <p></p>,
});

const OurServicesPage = () => {
  return (
    <>
      <div className={scss.content}>
      <ServicesV2 />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <OrderSite />
        </div>
        <Feedback />
        {/* <OurServices /> */}
      </div>
    </>
  );
};

export default OurServicesPage;
