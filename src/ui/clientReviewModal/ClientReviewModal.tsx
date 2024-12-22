"use client";

import React from "react";
import styles from "./ClientReviewModal.module.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useSendReview from "@/store/useSendReview";

interface IFormTelegram {
    name: string;
    position: string;
    review: string;
  }
  
  /// imports from ENV
  const TG_TOKEN = process.env.NEXT_PUBLIC_IANT_REVIEWS_TELEGRAM_TOKEN;
  const CHAD_ID = process.env.NEXT_PUBLIC_IANT_REVIEWS_TELEGRAM_CHAD_ID;
  /// imports from ENV

const ClientReviewModal: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
  } = useForm<IFormTelegram>({
    mode: "onChange",
  });

  const botsMessageModel = (data: IFormTelegram) => {
    let messageTG = `Client's name: <b>${data.name}</b>\n`;
    messageTG += `Client's position: <b>${data.position}</b>\n`;
    messageTG += `Client's review: <b>${data.review}</b>\n`;
    return messageTG;
  };

  const onSumbit: SubmitHandler<IFormTelegram> = async (data) => {
    try {
      await axios.post(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
        chat_id: CHAD_ID,
        parse_mode: "html",
        text: botsMessageModel(data),
      });
      reset();
      toast.success("Сообщение успешно отправлено!", {
        className: "toast-custom",
        autoClose: 2000,
      });
      closeModal();
    } catch (error) {
      toast.error("Пожалуйста, попробуйте позже.", {
        className: "toast-custom",
        autoClose: 2000,
      });
      console.log(error);
    }
  };

  const { isOpen, closeModal } = useSendReview();

  if (!isOpen) return null;

  return (
    <section className={styles.main_modal}>
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.container} onClick={(e) => e.stopPropagation()}>
          <button className={styles.close} onClick={closeModal}>
            &times;
          </button>
          <h2 className={styles.title}>Оставить отзыв</h2>
          {/* <p className={styles.description}>
            Оставьте ваши данные, и мы свяжемся с вами в ближайшее
            время.
          </p> */}
          <form onClick={handleSubmit(onSumbit)} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Ваше имя</label>
              <input type="text" placeholder="Введите имя" {...register('name', {required: true})} />
            </div>
            <div className={styles.formGroup}>
              <label>Ваше специальность</label>
              <input type="text" placeholder="Ваше специальность" {...register('position', {required: true})} />
            </div>
            <div className={styles.formGroup}>
              <label>Ваш отзыв</label>
              <input type="text" placeholder="Отзыв..." {...register('review', {required: true})} />
            </div>
            <button className={styles.submitBtn}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ClientReviewModal;
