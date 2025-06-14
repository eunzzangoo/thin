'use client';

import React from 'react';
import Logo from './Logo';
import { FaCommentDots, FaPenNib, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-50/50 border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* 회사 로고 */}
            <div className="mb-12 flex flex-col items-center">
              <Logo />
              <p className="text-sm text-gray-500 mt-2">일과 사람이 만나는 곳</p>
            </div>

            {/* 회사 정보 */}
            <div className="space-y-6 mb-12">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-600">
                <div className="flex items-center">
                  <span className="text-sm font-medium">주식회사 쓰인</span>
                  <span className="mx-3 text-gray-300">│</span>
                  <span className="text-sm">Business Licence. 811-81-03556</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm">경기도 안산시 단원구 원포공원 1로 59(에이동 5층)</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-gray-600">
                <div className="flex items-center">
                  <span className="text-sm">E. th_in@naver.com</span>
                  <span className="mx-3 text-gray-300">│</span>
                  <span className="text-sm">영업시간 : 09:00 ~ 18:00</span>
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div className="relative mb-12">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gradient-to-b from-white to-gray-50/50 px-4 text-gray-400 text-sm">
                  th_in
                </span>
              </div>
            </div>

            {/* 소셜 바로가기 */}
            <div className="flex justify-center gap-6 mb-8 mt-4">
              <a href="https://pf.kakao.com/_yourkakaolink" target="_blank" rel="noopener noreferrer" title="카카오톡 바로가기" className="text-blue-500 hover:text-blue-700 text-2xl transition-colors">
                <FaCommentDots />
              </a>
              <a href="https://blog.naver.com/_yourblog" target="_blank" rel="noopener noreferrer" title="블로그 바로가기" className="text-green-600 hover:text-green-800 text-2xl transition-colors">
                <FaPenNib />
              </a>
              <a href="https://instagram.com/_yourinsta" target="_blank" rel="noopener noreferrer" title="인스타그램 바로가기" className="text-pink-500 hover:text-pink-700 text-2xl transition-colors">
                <FaInstagram />
              </a>
            </div>

            {/* 저작권 */}
            <p className="text-gray-500 text-sm">
              © 2024 주식회사 쓰인. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 