'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'AR 기술 활용',
    company: 'LG생활건강',
    description: 'AR 기술 기반으로 자사 제품 사용 전/후 변화를 효과적으로 보여주는 프로그램 개발',
    category: '도매 및 소매업',
  },
  {
    title: '해외 전문 영상 제작',
    company: 'Naver',
    description: '해외 런칭 홍보 영상 제작. 서비스에 대한 이해 및 해외 고객층에 대한 이해를 기반으로 효과적인 영상을 제작',
    category: 'IT·솔루션',
  },
  {
    title: '금융 관련 영상 제작',
    company: '신한금융투자',
    description: '디지털로 진행하는 투자 관련 서비스 유관 영상 제작. 금융 관련 메시지가 정확하게 전달될 수 있는 영상 제작',
    category: '금융·보험',
  },
];

export default function ProjectSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const slideWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % projects.length;
    scrollToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    scrollToSlide(prevIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="py-40 bg-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            주요 프로젝트
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            다양한 기업들과 함께한 프로젝트를 소개합니다
          </p>
        </div>
        <div className="max-w-6xl mx-auto relative group">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-100"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-hidden pb-16 snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all group snap-center"
              >
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 group-hover:bg-blue-100 transition-colors">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-3">
                  {project.company}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-100"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
} 