import React from 'react'
import scss from "./CliCommetns.module.scss";

const CliComments = () => {
    const usersCom = {
        image: 'https://imgcdn.stablediffusionweb.com/2024/5/6/2b1d888a-a22f-49d5-94b2-d9e1fb2c2640.jpg',
        name: 'Баланчаев Баланча',
        position: 'Honda Motor Co. JP',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nostrum nobis eveniet! Delectus iure maxime, eum ullam deserunt animi dicta, itaque natus architecto accusamus doloremque iste facilis reiciendis, ratione tempora dolor similique repudiandae minima velit excepturi consectetur amet ad vel? Mollitia est modi adipisci quod debitis nostrum obcaecati molestias pariatur culpa placeat assumenda magni veniam odio nesciunt dicta repellendus aspernatur velit, distinctio similique, officia commodi. Nostrum fuga nesciunt eaque voluptas dignissimos velit, ad accusantium rerum quidem. Rerum consequatur, ea blanditiis reiciendis soluta culpa eum sit magni, modi nobis facilis veniam, temporibus velit natus laborum consectetur aut. At optio vel culpa!',
    }
  return (
    <section className={scss.Main}>
        <div className="container">
            <div className={scss.content}>
                <div className={scss.head_block}>
                    <h5>ЧТО ГОВОРЯТ ОБ I<span>ANT</span></h5>
                    <h1>Отзывы <span>клиентов</span></h1>
                </div>


                <div className={scss.com_block}> 

                    <div className={scss.block}>
                        <div className={scss.img_block}>
                            <img src={usersCom.image} alt="" />
                            <div className={scss.text_block}>
                                <h5>{usersCom.name}</h5>
                                <h6>{usersCom.position}</h6>
                            </div>
                        </div>

                        <p>{usersCom.description}</p>
                    </div>

                    <div className={scss.block}>
                        <div className={scss.img_block}>
                            <img src={usersCom.image} alt="" />
                            <div className={scss.text_block}>
                                <h5>{usersCom.name}</h5>
                                <h6>{usersCom.position}</h6>
                            </div>
                        </div>

                        <p>{usersCom.description}</p>
                    </div>

                    <div className={scss.block}>
                        <div className={scss.img_block}>
                            <img src={usersCom.image} alt="" />
                            <div className={scss.text_block}>
                                <h5>{usersCom.name}</h5>
                                <h6>{usersCom.position}</h6>
                            </div>
                        </div>

                        <p>{usersCom.description}</p>
                    </div>

                    <div className={scss.block}>
                        <div className={scss.img_block}>
                            <img src={usersCom.image} alt="" />
                            <div className={scss.text_block}>
                                <h5>{usersCom.name}</h5>
                                <h6>{usersCom.position}</h6>
                            </div>
                        </div>

                        <p>{usersCom.description}</p>
                    </div>

                    <div className={scss.block}>
                        <div className={scss.img_block}>
                            <img src={usersCom.image} alt="" />
                            <div className={scss.text_block}>
                                <h5>{usersCom.name}</h5>
                                <h6>{usersCom.position}</h6>
                            </div>
                        </div>

                        <p>{usersCom.description}</p>
                    </div>

                </div>
            </div>


        </div>
    </section>
  )
}

export default CliComments