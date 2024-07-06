import {
	FaDribbble,
	FaGithub,
	FaLinkedin,
	FaRegEnvelope,
} from 'react-icons/fa';

// export const featuredRepositories = [
// 	'shahriarshafin',
// 	'nodemcu-esp8266-fake-sign-in',
// 	'myportfolio',
// 	'snippets-treasury',
// ];

export const companies = [
	{
		id: 1,
		institution: 'Taskeasy Technologies',
		logo: '/assets/images/companies/taskeasy.png',
		degree: 'Software Engineer',
		startDate: 'Apr 2023',
		endDate: 'Present',
	},
	{
		id: 2,
		institution: 'Pridesys IT Limited',
		logo: '/assets/images/companies/pridesys.png',
		degree: 'Software Engineer - Intern',
		startDate: 'Aug 2022',
		endDate: 'Nov 2022',
	},
];

export const institutions = [
	{
		id: 1,
		institution: 'Sheshdri Rao Gudlavalleru Engineering College',
		logo: '/assets/images/institutions/uap.png',
		degree: 'Bachelor of Science, Information Technology & Engineering (CSE)',
		startDate: '2022',
		endDate: '2026',
	},
	{
		id: 2,
		institution: 'Sri VijayaNanda Junior College',
		logo: '/assets/images/institutions/busms.png',
		degree: 'Higher Secondary Certificate, MPC',
		startDate: '2020',
		endDate: '2022',
	},
	{
		id: 3,
		institution: 'Zilla Parishad High School',
		logo: '/assets/images/institutions/cpscs.png',
		degree: 'Secondary School Certificate, Science',
		startDate: '2019',
		endDate: '2020',
	},
];

export const socialMedia = [
	{
		id: 1,
		label: 'Github',
		icon: <FaGithub />,
		url: 'https://github.com/anudeep009',
	},
	{
		id: 2,
		label: 'Linkedin',
		icon: <FaLinkedin />,
		url: 'https://www.linkedin.com/in/anudeepavula009/',
	},
	// {
	// 	id: 3,
	// 	label: 'Dribbble',
	// 	icon: <FaDribbble />,
	// 	url: 'https://dribbble.com/',
	// },
	{
		id: 4,
		label: 'Mail to Anudeep',
		icon: <FaRegEnvelope />,
		url: 'mailto:connect.avulaanudeep@gmail.com',
	},
];
