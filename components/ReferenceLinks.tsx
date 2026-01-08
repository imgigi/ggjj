import React from 'react';
import { ResourceLink } from '../types';
import { Globe, Layout, Image as ImageIcon, ExternalLink, ArrowRight } from 'lucide-react';

const resources: ResourceLink[] = [
  {
    id: 1,
    name: "Awwwards",
    url: "https://www.awwwards.com/",
    description: "全球顶尖网页设计奖项，适合寻找高大上的创意灵感。",
    icon: "globe"
  },
  {
    id: 2,
    name: "Behance",
    url: "https://www.behance.net/",
    description: "Adobe 旗下的设计师社区，大量优秀的作品集排版参考。",
    icon: "layout"
  },
  {
    id: 3,
    name: "Pinterest",
    url: "https://www.pinterest.com/",
    description: "瀑布流图片搜索引擎，快速收集视觉风格和配色方案。",
    icon: "image"
  },
  {
    id: 4,
    name: "Dribbble",
    url: "https://dribbble.com/",
    description: "UI/UX 设计师的聚集地，适合寻找具体的组件和界面细节。",
    icon: "layout"
  }
];

const ReferenceLinks: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'globe': return <Globe className="h-6 w-6 text-white" />;
      case 'layout': return <Layout className="h-6 w-6 text-white" />;
      case 'image': return <ImageIcon className="h-6 w-6 text-white" />;
      default: return <Globe className="h-6 w-6 text-white" />;
    }
  };

  return (
    <div id="resources" className="bg-white py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/2 -ml-96 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Inspiration Sources</h2>
          <p className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            寻找参考灵感
          </p>
          <p className="mt-4 text-xl text-gray-500">
            审美是主观的。逛逛这些顶级设计网站，把您喜欢的风格链接发给我们，
            这将帮助我们更精准地捕捉您的喜好。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => (
            <a 
              key={resource.id} 
              href={resource.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-2xl"></div>
              
              <div className="flex items-center justify-between mb-6">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(resource.icon)}
                </span>
                <ExternalLink className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {resource.name}
              </h3>
              
              <p className="mt-3 text-sm text-gray-500 leading-relaxed min-h-[40px]">
                {resource.description}
              </p>
              
              <div className="mt-6 flex items-center text-sm font-medium text-blue-500 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                访问网站 <ArrowRight className="ml-1 w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReferenceLinks;