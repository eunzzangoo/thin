'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            대기업도 믿고 맡기는<br />
            밀착 외주 관리
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            연간 프로젝트 의뢰 금액 1,617억.<br />
            연간 프로젝트 의뢰 기업 6,800여개.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/register"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              프로젝트 등록하기
            </Link>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors text-center"
            >
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 