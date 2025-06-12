'use client';

import Link from 'next/link';
import Logo from './Logo';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link 
            href="/" 
            className="cursor-pointer no-underline group"
            aria-label="홈으로 이동"
          >
            <div className="flex flex-col items-center">
              <Logo />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <div className="flex items-center space-x-1 mr-4">
              <Link 
                href="/about" 
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                서비스 소개
              </Link>
              <Link 
                href="/projects" 
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                프로젝트
              </Link>
              <Link 
                href="/contact" 
                className="px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                문의하기
              </Link>
            </div>
            <div className="flex items-center space-x-2 pl-4 border-l border-gray-200">
              <Link 
                href="/register" 
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                프로젝트 등록
              </Link>
              <Link 
                href="/login" 
                className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                로그인
              </Link>
              <Link 
                href="/signup" 
                className="px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                회원가입
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="메뉴 열기"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <div className="px-4 py-2">
              <Link 
                href="/about" 
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                서비스 소개
              </Link>
              <Link 
                href="/projects" 
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                프로젝트
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                문의하기
              </Link>
            </div>
            <div className="px-4 py-2 border-t border-gray-100">
              <Link 
                href="/register" 
                className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium mb-2"
              >
                프로젝트 등록
              </Link>
              <Link 
                href="/login" 
                className="block px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium mb-2"
              >
                로그인
              </Link>
              <Link 
                href="/signup" 
                className="block px-4 py-2 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-center font-medium"
              >
                회원가입
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 