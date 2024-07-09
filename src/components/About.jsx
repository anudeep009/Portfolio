import { companies, institutions } from '../data/data';
import { skills } from '../data/skills';
import EduCard from '../utils/EduCard';
import Heading from '../utils/Heading';
import SkillCap from '../utils/SkiilCap';

const About = () => {
	return (
		<>
			<section className='mt-20'>
				<Heading text={'Tech Stack'} />

				<div className='mt-3 lg:px-5 w-full flex flex-wrap gap-4'>
					{skills.map((item) => (
						<SkillCap key={item.id} {...item} />
					))}
				</div>
			</section>

			<section>
				<Heading text={'Career'} />

				<div className='space-y-4 mt-3 lg:px-5'>
					{companies.map((edu) => (
						<EduCard key={edu.id} {...edu} />
					))}
				</div>
			</section>

			<section>
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