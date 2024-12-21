"use client";
import React from "react";
import scss from "./OrderSite.module.scss";
import { useRouter } from "next/navigation";
const OrderSite = () => {
  const router = useRouter();

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
            <button
              onClick={() => {
                router.push(
                  "https://docs.google.com/forms/d/e/1FAIpQLSeRPLQrk_FIUW6Obg9ZK1ST7R5qsy2xo_AbNWkwf8SM5wZzsA/viewform"
                );
              }}
            >
              УЗНАТЬ ЦЕНЫ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSite;
