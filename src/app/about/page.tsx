// 서비스 소개 페이지
'use client';
import Logo from '@/components/layout/Logo';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-16">
      <div className="w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl p-10 md:p-14 flex flex-col gap-8 items-center text-center">
        <Logo />
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 tracking-tight">서비스 소개</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
          <span className="font-bold text-blue-700">thin</span>은 일과 사람이 만나는 곳입니다.<br/>
          검증된 전문가와 기업을 연결하여, 성공적인 프로젝트와 비즈니스 성장을 지원합니다.
        </p>
        <div className="w-full flex flex-col gap-6 text-left">
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-1">주요 서비스</h2>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg">
              <li>전문가 매칭 및 프로젝트 관리</li>
              <li>PM 매니저 밀착 관리</li>
              <li>기업 맞춤형 인재/서비스 추천</li>
              <li>수수료 없는 투명한 거래</li>
              <li>상담 및 컨설팅 지원</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-blue-700 mb-1">thin만의 차별점</h2>
            <ul className="list-disc list-inside text-gray-700 text-base md:text-lg">
              <li>상위 1~5% 검증된 전문가 풀</li>
              <li>프로젝트 전 과정 PM 매니저 지원</li>
              <li>기업 고객 수수료 Zero</li>
              <li>다양한 업종/규모의 성공 사례</li>
            </ul>
          </div>
        </div>
        <div className="mt-6">
          <p className="text-base text-gray-600 mb-2">궁금한 점이 있으신가요?</p>
          <Link href="/contact" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition">문의하기</Link>
        </div>
      </div>
    </section>
  );
} 