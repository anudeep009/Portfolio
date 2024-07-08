import React from 'react';
import { SiHtml5, SiCss3, SiBootstrap, SiTailwindcss, SiFigma, SiGit, SiGithub, SiVisualstudiocode, SiPython, SiJavascript, SiReact, SiNextdotjs } from 'react-icons/si';

const About = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <nav className="flex items-center justify-between p-4 bg-gray-800">
        <div className="flex items-center space-x-4">
          <img src="path/to/avatar.png" alt="avatar" className="w-10 h-10 rounded-full"/>
          <div className="text-lg font-semibold">About</div>
          <div>Projects</div>
          <div>Open Source</div>
        </div>
        <div>
          <SiGithub size={24} />
        </div>
      </nav>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap space-x-4 mt-4">
          <SiHtml5 size={24} />
          <SiCss3 size={24} />
          <SiBootstrap size={24} />
          <SiTailwindcss size={24} />
          <SiFigma size={24} />
          <SiGit size={24} />
          <SiGithub size={24} />
          <SiVisualstudiocode size={24} />
          <SiPython size={24} />
          <SiJavascript size={24} />
          <SiReact size={24} />
          <SiNextdotjs size={24} />
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Career</h2>
        <div className="mt-4">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">Taskeasy Technologies</h3>
            <p className="text-sm">Software Engineer - Apr 2023 - Present</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">Pridesys IT Limited</h3>
            <p className="text-sm">Software Engineer - Intern - Aug 2022 - Nov 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">Education</h2>
        <div className="mt-4">
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">University of Asia Pacific</h3>
            <p className="text-sm">Bachelor of Science, Computer Science & Engineering (CSE) - 2018 - 2022</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">Cantonment Public School & College, BUSMS</h3>
            <p className="text-sm">Higher Secondary Certificate, Science - 2016 - 2018</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold">Cantonment Public School & College, Saidpur</h3>
            <p className="text-sm">Secondary School Certificate, Science - 2014 - 2016</p>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center">© 2024 Your Name</footer>
    </div>
  );
};

export default About;
