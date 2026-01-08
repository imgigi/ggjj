import React from 'react';
import { Project } from '../types';

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

// 辅助函数：提取 YouTube 或 Vimeo 视频 ID 并生成嵌入链接
const getEmbedUrl = (url: string) => {
  try {
    // Vimeo Logic
    const vimeoRegExp = /vimeo\.com\/([0-9]+)/;
    const vimeoMatch = url.match(vimeoRegExp);
    if (vimeoMatch && vimeoMatch[1]) {
      // title=0&byline=0&portrait=0 隐藏 Vimeo 的标题和头像
      // autoplay=1&muted=1 自动静音播放 (浏览器通常要求自动播放必须静音)
      // loop=1 循环播放
      // autopause=0 允许其他视频播放时不暂停当前视频
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&autoplay=1&muted=1&loop=1&autopause=0`;
    }

    // YouTube Logic
    const ytRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const ytMatch = url.match(ytRegExp);
    if (ytMatch && ytMatch[2].length === 11) {
      // autoplay=1&mute=1 自动静音播放
      // loop=1&playlist=ID 循环播放需要 playlist 参数
      return `https://www.youtube.com/embed/${ytMatch[2]}?rel=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${ytMatch[2]}`;
    }
    
    return url;
  } catch (e) {
    return url;
  }
};

const Portfolio: React.FC = () => {
  return (
    <div id="portfolio" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Selected Works</h2>
          <p className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            历史设计案例
          </p>
        </div>

        {/* Removed max-w-5xl to make videos larger (full width of container) */}
        <div className="flex flex-col gap-16 w-full mx-auto">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-black rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-video w-full">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;