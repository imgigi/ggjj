import React from 'react';
import { Project } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const projects: Project[] = [
  {
    id: 1,
    title: "Project 1",
    category: "",
    videoUrl: "https://vimeo.com/1152470518?share=copy&fl=sv&fe=ci",
    description: ""
  },
  {
    id: 2,
    title: "Project 2",
    category: "",
    videoUrl: "https://vimeo.com/1152471858?fl=ip&fe=ec",
    description: ""
  },
  {
    id: 3,
    title: "Project 3",
    category: "",
    videoUrl: "https://vimeo.com/1152471975?fl=ip&fe=ec",
    description: ""
  }
];

const getEmbedUrl = (url: string) => {
  try {
    const vimeoRegExp = /vimeo\.com\/([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegExp);
    if (vimeoMatch && vimeoMatch[1]) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&autoplay=1&muted=1&loop=1&autopause=0`;
    }
    const ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const ytMatch = url.match(ytRegExp);
    if (ytMatch && ytMatch[2].length === 11) {
      return `https://www.youtube.com/embed/${ytMatch[2]}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${ytMatch[2]}`;
    }
    return url;
  } catch (e) {
    return url;
  }
};

// Component for individual project to handle its own reveal
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [ref, isVisible] = useIntersectionObserver(0.2);

  return (
    <div 
      ref={ref}
      className={`group bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-video w-full overflow-hidden">
         <div className="w-full h-full transform group-hover:scale-[1.02] transition-transform duration-700">
             <iframe 
                className="w-full h-full"
                src={getEmbedUrl(project.videoUrl)} 
                title={`Case Study ${project.id}`}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                allowFullScreen
                loading="lazy"
              ></iframe>
         </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [headerRef, headerVisible] = useIntersectionObserver(0.1);

  return (
    <div id="portfolio" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Selected Works</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            历史设计案例
          </p>
        </div>

        <div className="flex flex-col gap-16 w-full mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;