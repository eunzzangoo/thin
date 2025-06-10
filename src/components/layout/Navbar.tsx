'use client';

import Link from 'next/link';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="m-0 mx-auto flex w-[1200px] flex-row items-center p-0 px-4 h-[60px]">
        {/* 로고 */}
        <Link href="/" className="cursor-pointer no-underline" aria-label="홈으로 이동">
          <Logo />
        </Link>

        {/* 여백 */}
        <div className="flex-grow" />

        {/* 중앙 메뉴 */}
        <section>
          <div className="flex">
            <Link href="/enterprise/projects/new" className="mr-6 flex items-center justify-center">
              <p className="text-[14px] leading-[21px] text-gray-900 font-medium">프로젝트 등록</p>
            </Link>
            <Link href="/enterprise/requests" className="mr-6 flex items-center justify-center">
              <p className="text-[14px] leading-[21px] text-gray-900 font-medium">프로젝트 찾기</p>
            </Link>
          </div>
        </section>

        {/* 우측 메뉴 */}
        <div className="flex flex-row items-center">
          <button
            type="button"
            className="relative h-9 flex items-center mr-6 no-underline whitespace-nowrap text-inherit bg-transparent border-none p-0 cursor-pointer"
          >
            <p className="text-[14px] leading-[21px] text-gray-900 font-medium">전문가 등록</p>
          </button>
          <button
            type="button"
            className="relative h-9 flex items-center no-underline whitespace-nowrap text-inherit bg-transparent border-none p-0 cursor-pointer mr-[28px]"
          >
            <p className="text-[14px] leading-[21px] text-gray-900 font-medium">로그인</p>
          </button>
          <Link
            href="/signup"
            className="flex h-9 w-[81px] items-center justify-center rounded-lg bg-gray-900 text-sm font-medium text-white transition-[background-color] duration-[0.3s] hover:bg-gray-700 active:bg-gray-800"
          >
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  );
} 