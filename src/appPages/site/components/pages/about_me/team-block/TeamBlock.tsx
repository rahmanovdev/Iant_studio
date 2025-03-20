'use client';
import { useEffect, memo } from 'react';
import Image from 'next/image';
import scss from './TeamBlock.module.scss';
import { PiCubeFocus } from 'react-icons/pi';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useSignUpModal from '@/store/useSignUpCommand';
import CommandModal from '@/ui/commandModal/CommandModal';
import Arlen from '../../../../../../../public/mans/photo_2024-06-13_12-39-18.jpg';
import Jumadil from '../../../../../../../public/mans/Jumadil.jpg';
import Adylbek from '../../../../../../../public/mans/Adyl.jpg';
import Belek from '../../../../../../../public/mans/Belek.jpg';

// Команда мүчөлөрүнүн маалыматы
const TEAM_MEMBERS = [
	{
		name: 'Жумадил Рахмонов',
		position: 'Сооснователь',
		image: Jumadil
	},
	{
		name: 'Белек Асраров',
		position: 'Сооснователь',
		image: Belek
	},
	{
		name: 'Адылбек Салижанов',
		position: 'Сооснователь',
		image: Adylbek
	},
	{
		name: 'Арлен Исмаилов',
		position: 'Сооснователь',
		image: Arlen
	}
];

const TeamBlock = () => {
	const { openModal } = useSignUpModal();

	useEffect(() => {
		AOS.init({ once: false });
		AOS.refresh();
	}, []);

	return (
		<section id='team-block' className={scss.Main}>
			<div className='container'>
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

					<div className={scss.team_images}>
						<div className={scss.image_block}>
							{TEAM_MEMBERS.map((member, index) => (
								<div
									key={member.name} // Уникалдуу идентификатор катары name колдонуу
									data-aos='fade-right'
									data-aos-delay={index * 500}
									data-aos-duration='500'
									className={scss.profile}
								>
									<Image
										src={member.image}
										alt={`${member.name} - ${member.position}`}
										className={scss.profile_image}
										width={250}
										height={370}
										quality={90}
										priority={index === 0} // Биринчи сүрөткө гана priority
									/>
									<div className={scss.info}>
										<h3 className={scss.name}>{member.name}</h3>
										<p className={scss.position}>{member.position}</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className={scss.experts_section}>
						<div className={scss.number_block}>
							<h1 className={scss.number}>20</h1>
							<h1>+</h1>
						</div>
						<p className={scss.description}>Профессиональных IT экспертов</p>
						<button onClick={openModal} className={scss.join_button}>
							➤ Хочу в команду
						</button>
					</div>
				</div>
			</div>
			<CommandModal />
		</section>
	);
};

export default memo(TeamBlock);
