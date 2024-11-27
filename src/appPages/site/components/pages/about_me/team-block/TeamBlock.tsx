import React from "react";
import scss from "./TeamBlock.module.scss";
import { PiCubeFocus } from "react-icons/pi";

const TeamBlock = () => {
    const teamPeopleInfo = {
        image: 'https://www.photoland.com.au/wp-content/uploads/2021/09/Can-People-Get-Passport-Photos-Done-Online-1.jpg',
        name: 'Баланчаев Баланча',
        position: 'Frontend Developer'
    }
  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.team_head}> 
            <div className={scss.left}>
              <h5>НАША КОМАНДА</h5>
              <h1>
                Команда <span>профессионалов</span>
              </h1>
              <p>
                Вы не поверите, но мы правда любим свою работу <br /> и делаем
                её хорошо.
              </p>
            </div>

            <div className={scss.right}>
                <div className={scss.line}></div>
                    <div className={scss.block}>
                <PiCubeFocus />
                <p>
                    Систематизируем и <br /> автоматизируем ваш бизнес
                </p>
              </div>
            </div>
          </div>


          {/* TEAM IMG  */}
          <div className={scss.team_images}>
            <div className={scss.image_block}> 
              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  alt="Person 1"
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                  <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                  <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  alt="Person 2"
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  alt="Person 3"
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

              <div className={scss.profile}>
                <img
                  src={teamPeopleInfo.image}
                  className={scss.profile_image}
                />
                <div className={scss.info}>
                <h3 className={scss.name}>{teamPeopleInfo.name}</h3>
                <p className={scss.position}>{teamPeopleInfo.position}</p>
                </div>
              </div>

            </div>
            </div>
          </div>
          {/* TEAM IMG  */}





        </div>
    </section>
  );
};

export default TeamBlock;
