'use client';
import dynamic from 'next/dynamic';
import scss from './MainAbout.module.scss';
import OrderSite from '@/ui/orderSite/OrderSite';

// Компоненттерди динамикалык импорт менен аныктоо
const MissionBlock = dynamic(() => import('./mission-block/MissionBlock'), {
	loading: () => <div className={scss.placeholder}></div>,
	ssr: false // SSR өчүрүлүп, клиент тарапта гана жүктөлөт
});

const AboutBlock = dynamic(() => import('./about-block/AboutBlock'), {
	loading: () => <div className={scss.placeholder}></div>,
	ssr: false
});

const TeamBlock = dynamic(() => import('./team-block/TeamBlock'), {
	loading: () => <div className={scss.placeholder}></div>,
	ssr: false
});

const TeamBlockForMob = dynamic(() => import('./team-block/TeamBlockForMob'), {
	loading: () => <div className={scss.placeholder}></div>,
	ssr: false
});

const CliComments = dynamic(() => import('./cli-comments/CliComments'), {
	loading: () => <div className={scss.placeholder}></div>,
	ssr: false
});

const Feedback = dynamic(() => import('./feedback/Feedback'), {
	loading: () => <div className={scss.placeholder}></div>,
	ssr: false
});

// Компоненттердин тизмеси
const COMPONENTS = [
	MissionBlock,
	AboutBlock,
	TeamBlock,
	TeamBlockForMob,
	CliComments
];

const MainAbout = () => {
	return (
		<div className={scss.Main_about}>
			{COMPONENTS.map((Component, index) => (
				<Component key={index} />
			))}
			<div className={scss.orderSiteWrapper}>
				<OrderSite />
			</div>
			<Feedback />
		</div>
	);
};

export default MainAbout;
