import React from "react";
import OrderSite from "@/ui/orderSite/OrderSite";
import scss from "./OurWorksPage.module.scss";
import Feedback from "./about_me/feedback/Feedback";
import OurWorks from "./our_works/OurWorks";
const OurWorksPage = () => {
  return (
    <>
      <div className={scss.content}>
        <OurWorks />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <OrderSite />
        </div>
        <Feedback />
      </div>
    </>
  );
};

export default OurWorksPage;
