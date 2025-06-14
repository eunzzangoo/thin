'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

declare global {
  interface Window {
    ChannelIO: any;
  }
}

export default function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-tr from-gray-50 via-white to-gray-50/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            <span className="inline-block text-blue-600 mr-2">'쓰인'</span>
            <span className="inline-block">과 함께하세요</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-12">
            1분 안에 간편하게 신청하고,<br />
            전문 매니저와 상담 받아보세요
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link 
              href="/register" 
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 rounded-xl hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              프로젝트 등록하기
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.ChannelIO) {
                  window.ChannelIO('showChat');
                }
              }}
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              문의하기
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 