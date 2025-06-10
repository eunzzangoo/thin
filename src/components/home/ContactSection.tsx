'use client';

import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            1분 안에 간편하게 신청하고,<br />
            매니저와 상담 받아보세요
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            프로젝트 등록하기
          </Link>
          <Link
            href="/contact"
            className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-md font-semibold hover:bg-blue-50 transition-colors text-center"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </div>
    </section>
  );
} 