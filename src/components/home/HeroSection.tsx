'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="block mb-2">기업성장의</span>
            <span className="text-blue-600">새로운 기준</span>
          </h1>
          <div className="relative">
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
              <span className="block mb-2">최고의 재택 인재와 함께</span>
              <span className="font-medium">비즈니스의 성장 가능성을 확장하세요</span>
            </p>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600/20 rounded-full"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
            <Link 
              href="/register" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              프로젝트 등록하기
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              무료 상담받기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 