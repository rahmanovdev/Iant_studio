'use client';
import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import styles from './TeamBlockForMob.module.scss';
import useSignUpModal from '@/store/useSignUpCommand';
import CommandModal from '@/ui/commandModal/CommandModal';
import Image from 'next/image';
import Arlen from '../../../../../../../public/mans/photo_2024-06-13_12-39-18.jpg';

// Команда мүчөлөрүнүн маалыматы
const TEAM_PEOPLE_INFO = [
	{
		image:
			'https://www.photoland.com.au/wp-content/uploads/2021/09/Can-People-Get-Passport-Photos-Done-Online-1.jpg',
		name: 'Жумадил Рахманов',
		position: 'Сооснователь'
	},
	{
		image:
			'https://www.photoland.com.au/wp-content/uploads/2021/09/Can-People-Get-Passport-Photos-Done-Online-1.jpg',
		name: 'Белек Асраров',
		position: 'Сооснователь'
	},
	{
		image: Arlen,
		name: 'Арлен Исмаилов',
		position: 'Сооснователь'
	},
	{
		image:
			'https://www.photoland.com.au/wp-content/uploads/2021/09/Can-People-Get-Passport-Photos-Done-Online-1.jpg',
		name: 'Адылбек Салижанов',
		position: 'Сооснователь'
	}
];

const TeamBlockForMob = () => {
	const { openModal } = useSignUpModal();

	return (
		<section className={styles.main_slides}>
			<div className='container'>
				<div className={styles.team_head}>
					<div className={styles.left}>
						<h5>НАША КОМАНДА</h5>
						<h1>
							Команда <span>профессионалов</span>
						</h1>
						<p>
							Вы не поверите, но мы правда любим свою работу <br /> и делаем её
							хорошо.
						</p>
					</div>
				</div>
			</div>

			<div className={styles.teamBlockContainer}>
				<Swiper
					pagination={{ dynamicBullets: true }}
					modules={[Pagination]}
					className={styles.mySwiper}
				>
					{TEAM_PEOPLE_INFO.map(person => (
						<SwiperSlide key={person.name} className={styles.swiperSlide}>
							<div className={styles.profile}>
								<Image
									src={person.image}
									alt={`${person.name} - ${person.position}`}
									className={styles.profile_image}
									width={250}
									height={370}
									quality={90}
									priority={person.name === 'Жумадил Рахманов'} // Биринчи сүрөткө гана
								/>
								<div className={styles.info}>
									<h3 className={styles.name}>{person.name}</h3>
									<p className={styles.position}>{person.position}</p>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={styles.experts_section}>
					<div className={styles.number_block}>
						<h1 className={styles.number}>20</h1>
						<h1>+</h1>
					</div>
					<p className={styles.description}>Профессиональных IT экспертов</p>
					<button onClick={openModal} className={styles.join_button}>
						➤ Хочу в команду
					</button>
				</div>
			</div>

			<CommandModal />
		</section>
	);
};

export default memo(TeamBlockForMob);
