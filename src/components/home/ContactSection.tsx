'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            1분 안에 간편하게 신청하고,<br />
            매니저와 상담 받아보세요 
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              프로젝트 등록하기
            </Link>
            <Link 
              href="/consult" 
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-semibold"
            >
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 