import dynamic from "next/dynamic";
import scss from "./OurServicesPage.module.scss";
import OrderSite from "@/ui/orderSite/OrderSite";
import Feedback from "./about_me/feedback/Feedback";

const OurServices = dynamic(() => import("./our_services/OurServices"), {
  loading: () => <p></p>,
});

const OurServicesPage = () => {
  return (
    <>
      <div className={scss.content}>
        <OurServices />
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <OrderSite/>
        </div>
        <Feedback/>
      </div>
    </>
  );
};

export default OurServicesPage;
