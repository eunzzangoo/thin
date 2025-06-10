'use client';

import Link from 'next/link';
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
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">th_in</span>
              <span className="text-xs text-gray-500 group-hover:text-blue-500 transition-colors">일과 사람이 만나는 곳</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              서비스 소개
            </Link>
            <Link href="/projects" className="text-gray-600 hover:text-blue-600 transition-colors">
              프로젝트
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              문의하기
            </Link>
            <Link 
              href="/register" 
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              프로젝트 등록
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6 text-gray-600" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link 
              href="/about" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              서비스 소개
            </Link>
            <Link 
              href="/projects" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              프로젝트
            </Link>
            <Link 
              href="/contact" 
              className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              문의하기
            </Link>
            <Link 
              href="/register" 
              className="block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
            >
              프로젝트 등록
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 