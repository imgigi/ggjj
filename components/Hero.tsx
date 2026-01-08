import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Hero: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.1);

  return (
    <div id="home" className="relative bg-white overflow-hidden pt-20 lg:pt-28 pb-16 min-h-[90vh] flex items-center">
      {/* Background decoration with Blob Animations */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-40"></div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-blob mix-blend-multiply"></div>
      <div className="absolute top-0 left-20 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-pink-100 rounded-full blur-3xl opacity-50 animate-blob animation-delay-4000 mix-blend-multiply"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center justify-center">
          
          <div 
            ref={ref}
            className={`sm:text-center md:max-w-3xl md:mx-auto lg:col-span-12 lg:text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-sm font-medium mb-6 hover:scale-105 transition-transform cursor-default">
              <Sparkles className="w-4 h-4 mr-2" />
              专注于高审美定制设计
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:leading-tight">
              打造专属您的 <br className="hidden lg:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-pulse-slow">
                极致网页体验
              </span>
            </h1>
            <p className="mt-6 text-base text-gray-500 sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl leading-relaxed">
              无论是个人作品集展示，还是商业品牌落地，我们拒绝平庸。
              浏览历史案例寻找灵感，开启您的定制设计之旅。
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#sop"
                  aria-label="跳转到资料准备SOP流程"
                  className="group inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1 active:scale-95"
                >
                  资料准备流程 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;