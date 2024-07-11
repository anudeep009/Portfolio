import { useRef, useState } from 'react';
import { greetingList } from '../data/greetings';

const Intro = () => {
	const typingIntervalRef = useRef(null);
	const [arrItem, setArrItem] = useState(0);
	const [typedText, setTypedText] = useState('');
	const fullText = "Hey, It's so nice to see you here, thanks for visiting!";

	const nextItem = () => {
		setArrItem((arrItem + 1) % greetingList.length);
	};

	const handleMouseEnter = () => {
		startTypingAnimation();
	};

	const handleMouseLeave = () => {
		clearInterval(typingIntervalRef.current);
		setTypedText('');
	};

	const startTypingAnimation = () => {
		let index = 0;
		typingIntervalRef.current = setInterval(() => {
			setTypedText(fullText.substring(0, index));
			index++;
			if (index > fullText.length) {
				clearInterval(typingIntervalRef.current);
			}
		}, 50);
	};

	return (
		<section className='p-4 md:p-8'>
			<div className='flex items-center justify-center md:flex-row flex-col'>
				<div className='my-8 md:my-16'>
					<div className='relative h-32 w-32 md:h-44 md:w-44 flex justify-center items-center'>
						<div
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
							className='group relative transition-all ease-in'
						>
							<img src="https://i.imghippo.com/files/fPSQG1720455771.jpg" alt="Avatar" className="shadow rounded-full max-w-full h-auto align-middle border-[2px] border-blue-500" />
							<div className='absolute top-[-100px] left-[-40px] flex-col items-center hidden group-hover:flex'>
								<span className='p-2 w-32 h-auto text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
									{typedText}
								</span>
								<div className='before:content-[""] before:w-0 before:h-0 before:absolute before:border-r-[12px] before:border-r-sh-dark before:border-l-[6px] before:border-l-transparent before:border-t-[6px] before:border-t-sh-dark before:border-b-[10px] before:border-b-transparent before:left-1/2 before:-translate-x-1/2 before:-bottom-3'></div>
							</div>
						</div>
					</div>
				</div>
				<div className='ml-0 md:ml-16'>
					<div className='relative group inline-block'>
						<h2
							onClick={nextItem}
							className='text-2xl md:text-3xl font-bold animate-up bg-gradient-to-r from-sh-blue to-sh-blue mb-5 tracking-widest inline-block cursor-pointer select-none'
						>
							{greetingList[arrItem].text}
							<span className='italic'>!</span>
						</h2>
						<div className='absolute bottom-0 flex-col items-center hidden mb-14 group-hover:flex'>
							<span className='relative z-10 p-2 text-xs leading-none text-sh-white whitespace-no-wrap bg-sh-dark shadow-lg rounded-md'>
								{greetingList[arrItem].lang}
							</span>
							<div className='w-3 h-3 -mt-2 rotate-45 bg-sh-dark'></div>
						</div>
					</div>

					<h1 className='text-xl md:text-2xl font-normal leading-8 md:leading-10'>
						<span className='block'>
							I am{' '}
							<span className='font-bold tracking-widest animate-up bg-gradient-to-r from-sh-purple to-sh-purple cursor-default select-none'>
								Anudeep Avula
							</span>
							, a web developer
						</span>
						from India who focuses on frontend technologies & collaborates
						to open source projects.
						<span className='mt-5 block'>
							I am passionate about building excellent software that improves
							the lives of those around me.
						</span>
					</h1>
				</div>
			</div>
			<div
				className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
				aria-hidden='true'
			>
				<div
					className='aspect-[1155/678] w-[30rem] md:w-[50rem] lg:w-[70rem]'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 90% 61.6%, 90.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 59.5% 27.5%, 74.2% 61.4%, 29.4% 68.1%, 65% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 10.1% 40.9%, 17.9% 100%, 77.6% 78%, 76.1% 83.7%, 86.1% 50%)',
					}}
				/>
			</div>
		</section>
	);
};

export default Intro;
