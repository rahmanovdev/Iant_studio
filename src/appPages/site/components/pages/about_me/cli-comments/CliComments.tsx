"use client";

import React from 'react';
import Image from 'next/image'; // Импортируем компонент Image
import scss from "./CliCommetns.module.scss";
import useSendReview from '@/store/useSendReview';
import ClientReviewModal from '@/ui/clientReviewModal/ClientReviewModal';

const CliComments = () => {
    const { openModal } = useSendReview();
    const usersCom = {
        image: 'https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg',
        name: 'Баланчаев Баланча',
        position: 'Honda Motor Co. JP',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum nobis eveniet! Delectus iure maxime, eum ullam deserunt animi dicta, itaque natus architecto accusamus doloremque iste facilis reiciendis, ratione tempora dolor similique repudiandae minima velit excepturi consectetur amet ad vel? Mollitia est modi adipisci quod debitis nostrum obcaecati molestias pariatur culpa placeat assumenda magni veniam odio nesciunt dicta repellendus aspernatur velit, distinctio similique, officia commodi. Nostrum fuga nesciunt eaque voluptas dignissimos velit, ad accusantium rerum quidem. Rerum consequatur, ea blanditiis reiciendis soluta culpa eum sit magni, modi nobis facilис veniam, temporibus velit natus laborum consectetur авт. At optio vel culpa!',
    };

    return (
        <>
            <section className={scss.Main}>
                <div className="container">
                    <div className={scss.content}>
                        <div className={scss.head_block}>
                            <h5>ЧТО ГОВОРЯТ ОБ I<span>ANT</span></h5>
                            <h1>Отзывы <span>клиентов</span></h1>
                        </div>

                        <div className={scss.com_block}>
                            {Array(5).fill(usersCom).map((user, index) => (
                                <div className={scss.block} key={index}>
                                    <div className={scss.img_block}>
                                        <Image 
                                            src={user.image} 
                                            alt={user.name} 
                                            width={100} 
                                            height={100} 
                                            className={scss.profile_image}
                                        />
                                        <div className={scss.text_block}>
                                            <h5>{user.name}</h5>
                                            <h6>{user.position}</h6>
                                        </div>
                                    </div>
                                    <p>{user.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className={scss.main_button}>
                            <div onClick={openModal} className={scss.button}>Оставить отзыв</div>
                        </div>
                    </div>
                </div>

            </section>
            <ClientReviewModal />
        </>
    );
};

export default CliComments;
