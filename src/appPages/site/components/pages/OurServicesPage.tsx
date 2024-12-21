import dynamic from "next/dynamic";
import scss from "./OurServicesPage.module.scss";
import OrderSite from "@/ui/orderSite/OrderSite";
import Feedback from "./about_me/feedback/Feedback";
import ServicesV2 from "./our_services/ServicesV2";

const OurServices = dynamic(() => import("./our_services/ServicesV2"), {
  loading: () => <p></p>,
});

const OurServicesPage = () => {
  return (
    <>
      <div className={scss.content}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <OrderSite />
        </div>
        <Feedback />
        {/* <OurServices /> */}
        <ServicesV2 />
      </div>
    </>
  );
};

export default OurServicesPage;
