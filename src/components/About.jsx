import { companies, institutions } from '../data/data';
import { skills } from '../data/skills';
import EduCard from '../utils/EduCard';
import Heading from '../utils/Heading';
import SkillCap from '../utils/SkiilCap';
import Intro from './Intro';

const About = () => {
	return (
		<>
		    <section className='m-4 mt-20 lg:m-20 text-white font-mono'>
			<div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
				<Intro />
			</div>
			</section>
			<section className='m-4 mt-20 lg:m-20'>
				<Heading text={'Tech Stack'} />

				<div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
					{skills.map((item) => (
						<SkillCap key={item.id} {...item} />
					))}
				</div>
			</section>
			{/* <section className='m-4 lg:m-20'>
				<Heading text={'Career'} />

				<div className='space-y-4 mt-3 lg:px-5'>
					{companies.map((edu) => (
						<EduCard key={edu.id} {...edu} />
					))}
				</div>
			</section> */}

			<section className='m-4 lg:m-20'>
				<Heading text={'Education'} />

				<div className='space-y-4 mt-3 lg:px-5'>
					{institutions.map((edu) => (
						<EduCard key={edu.id} {...edu} />
					))}
				</div>
			</section>
		</>
	);
};

export default About;
