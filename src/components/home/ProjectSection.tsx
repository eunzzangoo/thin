'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    category: '제조업(초기창업자)',
    title: '드론 설계 구조 역학 및 해설 지원',
    company: '',
    description: '드론 설계에 필요한 구조 역학 해설과 3D 이미지, 애니메이션 제작까지 지원',
  },
  {
    category: '제조업(초기창업자)',
    title: '홈페이지 리뉴얼 및 신규 제작',
    company: '',
    description: '기업의 브랜드 이미지를 반영한 홈페이지 리뉴얼 및 신규 홈페이지 제작',
  },
  {
    category: '제조업(업력 30년)',
    title: '프로세스 개편 TF팀 및 업무 지원',
    company: '',
    description: '프로세스 개편에 따른 TF팀 개설과 실질적인 업무 지원 제공',
  },
  {
    category: '관공서/공공기관',
    title: '지역 사업 홍보잡지 제작',
    company: '',
    description: '지역 사업 활성화를 위한 맞춤형 홍보잡지 기획 및 제작',
  },
  {
    category: '제조업(초기창업자)',
    title: '미용기기 프로토타입 개발 지원',
    company: '',
    description: '미용기기 프로토타입 제작에 필요한 개발 및 기술 지원',
  },
  {
    category: '제조업(업력 30년)',
    title: '금형 설계 업무 지원',
    company: '',
    description: '30년 업력의 노하우를 바탕으로 한 금형 설계 및 업무 지원',
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
    <section className="py-24 bg-gradient-to-bl from-gray-50 via-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            <span className="inline-block text-blue-600 mr-2">'th_in'</span>
            <span className="inline-block">의 프로젝트</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            다양한 기업들과 함께한 성공적인 프로젝트를 소개합니다
          </p>
        </div>
        <div className="max-w-6xl mx-auto relative group">
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-100 hover:shadow-xl"
          >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex gap-8 overflow-x-hidden pb-16 snap-x snap-mandatory"
          >
            {projects.map((project, index) => (
              <div 
                key={index}
                className="flex-none w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50 snap-center"
              >
                <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-600 rounded-full text-sm font-medium mb-6 hover:from-blue-100 hover:to-blue-200/50 transition-colors">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {project.title}
                </h3>
                <p className="text-lg font-semibold text-blue-600 mb-6">
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100 border border-gray-100 hover:shadow-xl"
          >
            <ChevronRightIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
} 