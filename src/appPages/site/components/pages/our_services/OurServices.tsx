// import React from "react";
// import scss from './OurServices.module.scss'
// import service1 from "../../../../../../public/assets/service1.svg";
// import service2 from "../../../../../../public/assets/service2.svg";
// import service3 from "../../../../../../public/assets/service3.svg";
// import service4 from "../../../../../../public/assets/service4.svg";
// import Image from "next/image";
// import HeadOurService from "./HeadOurService";
// import { IoMdCheckmark } from "react-icons/io";
// import Feedback from "../about_me/feedback/Feedback";


// const OurServices = () => {
//   return (
//     <section className={scss.Main}>
//       <HeadOurService />
//       <div className="container">
//         <div className={scss.content}>
//           {/* #1 */}
//           <div className={scss.service_box}>
//             <Image src={service1} alt="" width={200} height={200} />

//             <div className={scss.service_bottom}>
//               <div className={scss.service_text}>
//                 <h2>Создание <br /> сайтов</h2>
//                 <p>Современный сайт – <br />это появление новых <br /> клиентов и рост высоких <br /> продаж!</p>
//               </div>

//               <div className={scss.main_check_mark}>
//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Делаем продающие сайты и лендинги для любого бизнеса.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Разработаем сайт с современным дизайном и удобным интерфейсом</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Перед началом работы проведем маркетинговый анализ.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Представим ваш бизнес в наиболее выгодном свете.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//           {/* #1 */}


//           {/* #2 */}
//           <div className={scss.service_box}>
//             <Image src={service2} alt="" width={200} height={200} />

//             <div className={scss.service_bottom}>
//               <div className={scss.service_text}>
//                 <h2>Разработка лого <br />& дизайн сайта</h2>
//                 <p>Запоминающийся стиль <br /> выделит вас из сотни <br /> конкурентов.</p>
//               </div>

//               <div className={scss.main_check_mark}>
//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Проведем анализ фирменных стилей аналогичных компаний, чтобы избежать повторений.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Разработаем сайт с современным дизайном и удобным интерфейсом</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Подберем цвета и шрифт, которые сделают ваш бренд узнаваемым с первого взгляда.</p>
//                   </div>
//                 </div>


//               </div>
//             </div>

//           </div>
//           {/* #2 */}


//           {/* #3 */}
//           <div className={scss.service_box}>
//             <Image src={service3} alt="" width={200} height={200} />

//             <div className={scss.service_bottom}>
//               <div className={scss.service_text}>
//                 <h2>Разработка <br /> мобильных <br /> приложении</h2>
//                 <p>Сделаем мобильное <br /> приложение, которое <br /> принесет вам прибыль сразу <br /> после запуска.</p>
//               </div>

//               <div className={scss.main_check_mark}>
//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Разработаем концепцию приложения под задачи именно вашего бизнеса.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Спроектируем интуитивно понятный интерфейс, привлекающий пользователей.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Создадим красивый современный дизайн в духе самых актуальных трендов.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Окажем полную техническую и информационную поддержку после запуска приложения.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//           </div>
//           {/* #3 */}


//           {/* #4 */}
//           <div className={scss.service_box}>
//             <Image src={service4} alt="" width={200} height={200} />

//             <div className={scss.service_bottom}>
//               <div className={scss.service_text}>
//                 <h2>Внедрение <br /> CRM</h2>
//                 <p>CRM повышает <br /> эффективность работы с <br /> клиентами, что влечет <br /> увеличение продаж и дохода <br /> компании.</p>
//               </div>

//               <div className={scss.main_check_mark}>
//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Определим специфику вашей организации.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Подберем CRM-систему, идеально подходящую вашему бизнесу.</p>
//                   </div>
//                 </div>

//                 <div className={scss.check_mark}>
//                   <div className={scss.check_mark_logo}>
//                     <IoMdCheckmark />
//                   </div>
//                   <div className={scss.check_mark_text}>
//                     <p>Внедрим CRM, оптимизирующую процессы бизнес-отношений с клиентами, проведем обучение ваших сотрудников.</p>
//                   </div>
//                 </div>


//               </div>
//             </div>

//           </div>
//           {/* #4 */}
//         </div>
//       </div>



//       <Feedback />
//     </section>
//   );
// };

// export default OurServices;
