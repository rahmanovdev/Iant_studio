"use client";
import React from "react";
import scss from "./OrderSite.module.scss";

const OrderSite = () => {
  const orderInfo = {
    title: "Хотите заказать",
    description:
      "У нас работают профессионалы с большим опытом, у вас не будет проблем с не знающими моментами при разработке сайта, все самое нужное мы вам посоветуем и предоставим.",
  };
  return (
    <section className={scss.Main}>
      <div className="container_for_orderBlock">
        <div className={scss.content}>
          <h3>
            {orderInfo.title} <span>сайт?</span>
          </h3>
          <h5>{orderInfo.description}</h5>

          <div className={scss.orderBlock}>
            <div className={scss.left}>
              <p>Для деловых предложений:</p>
              <span>info@iantstudio.kg</span>
            </div>
            <div className={scss.right}>
              <p>Для консультации:</p>
              <span>+996 700 188 251</span>
            </div>
          </div>

          <div className={scss.button}>
            <a
              href="https://wa.me/996700188251"
              target="_blank"
              rel="noopener noreferrer"
              className={scss.whatsappButton}
            >
              УЗНАТЬ ЦЕНЫ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSite;
