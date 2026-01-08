import React from 'react';
import { SOPStep } from '../types';
import { FileText, FolderArchive, Link as LinkIcon, MessageCircle, CheckCircle2 } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const steps: SOPStep[] = [
  {
    id: 1,
    title: "页面文案与素材",
    icon: "file-text",
    content: [
      "网站各个页面的文字内容",
      "图片/视频素材",
      "建议：主页 (个人介绍/Slogan)",
      "建议：项目作品页面 (项目文字介绍 + 对应图片说明)"
    ],
    note: "推荐整理在一个 Word 文档中。"
  },
  {
    id: 2,
    title: "附件打包",
    icon: "folder",
    content: [
      "简历和补充文件，比如个人介绍 (如有)",
      "高清作品原图",
      "展示视频文件",
      "Logo 源文件 (如有)"
    ],
    note: "使用文件夹打包压缩，或发网盘链接。"
  },
  {
    id: 3,
    title: "参考意向",
    icon: "link",
    content: [
      "喜欢的网站链接",
      "喜欢的配色方案",
      "对某些特定动效的描述"
    ],
    note: "参考链接能让我们最快理解您的审美。"
  }
];

const SOPGuide: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver(0.15);

  return (
    <div id="sop" className="relative bg-[#0B1121] py-24 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px] animate-pulse animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          
          {/* Left Side: The "Chat" Concept */}
          <div className={`mb-16 lg:mb-0 sticky top-24 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#1E293B] border border-slate-700/50 text-blue-400 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm">
              <MessageCircle className="w-3.5 h-3.5 mr-2" />
              SIMPLE PROCESS
            </div>
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6 leading-tight">
              资料准备 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                SOP 流程指南
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed max-w-lg">
              我们深知准备资料可能很繁琐。为了让沟通更高效，
              您可以参考右侧的 Checklist，或者直接看下面的简易需求。
            </p>

            {/* Glassmorphism Chat Bubble */}
            <div className="bg-[#151E32] rounded-3xl p-8 relative shadow-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-500">
               {/* Floating Hand Emoji */}
               <div className="absolute -top-5 -left-5 w-14 h-14 bg-[#3B82F6] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 z-10 border-4 border-[#0B1121] animate-wave origin-bottom-right">
                 <span className="text-3xl">👋</span>
               </div>
               
               <div className="mb-6 flex items-center gap-3 ml-2">
                 <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                 <span className="text-slate-500 text-xs font-mono uppercase tracking-widest">MESSAGE FROM DESIGNER</span>
               </div>
               
               <div className="space-y-6 text-slate-300 font-sans">
                 <p className="text-white text-lg font-bold">宝子，个人作品集参考资料需求：</p>
                 
                 <div className="space-y-4 pl-4 border-l-2 border-slate-700">
                    <div>
                        <p className="font-medium text-white">1. 网站各个页面的文字和图片/视频素材 <span className="text-slate-500 text-sm font-normal">(Word文档)</span></p>
                        <p className="text-sm text-slate-500 mt-1">比如：主页介绍、项目说明</p>
                    </div>
                    <div>
                        <p className="font-medium text-white">2. 附件 <span className="text-slate-500 text-sm font-normal">(简历、高清大图、视频) (文件夹打包)</span></p>
                    </div>
                    <div>
                        <p className="font-medium text-white">3. 参考网站链接</p>
                    </div>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Side: Structured Cards */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`group relative bg-[#151E32] rounded-2xl p-7 border border-slate-800 hover:border-blue-500/30 transition-all duration-700 hover:shadow-xl hover:shadow-blue-900/5 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <div className="absolute top-6 right-6 text-slate-700 font-mono text-sm font-bold opacity-50">
                  0{step.id}
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-5">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-slate-800/80 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 border border-slate-700">
                      {step.icon === 'file-text' && <FileText className="h-6 w-6" />}
                      {step.icon === 'folder' && <FolderArchive className="h-6 w-6" />}
                      {step.icon === 'link' && <LinkIcon className="h-6 w-6" />}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    
                    <ul className="space-y-3 mb-5">
                      {step.content.map((item, idx) => (
                        <li key={idx} className="flex items-start text-slate-400 text-sm leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-1.5 flex-shrink-0 opacity-70"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {step.note && (
                      <div className="flex items-center text-xs text-emerald-500/80 font-medium bg-emerald-500/5 py-2 px-3 rounded-lg border border-emerald-500/10 w-fit">
                         <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
                         {step.note}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default SOPGuide;