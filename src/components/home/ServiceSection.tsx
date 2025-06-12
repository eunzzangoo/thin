'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ServiceSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-gray-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xl md:text-2xl font-semibold text-blue-700 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              중장기 프로젝트부터 단기 인력 충원까지
            </span>
            <span className="text-lg md:text-xl text-gray-700 font-medium">저희 쓰인은 기업이 필요로 하는 다양한 서비스를 제공합니다.</span>
            <span className="text-base md:text-lg text-blue-600 font-bold mt-3 italic tracking-wide">"검증된 원격 인재, <span className='underline underline-offset-4'>쓰인</span>에서 만나 새로운 가치를 경험하세요"</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto py-8 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-tl from-white via-blue-50 to-blue-100/60 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/70 flex flex-col items-center text-center gap-8">
                <div className="relative w-full h-48 mb-12 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/challenge-1.jpg"
                    alt="인력 부족 문제"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full">Challenge</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight leading-snug">인력 부족 문제</h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-base md:text-lg">전문 인력 채용의 어려움과 높은 인건비 부담으로 인한 경영 스트레스</p>
                <div className="flex items-center justify-center text-blue-600 gap-2 mb-4">
                  <span className="text-sm font-semibold">Solution</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-gray-900 font-semibold text-lg md:text-xl mt-2">검증된 원격 개발자 채용 서비스</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-tl from-white via-blue-50 to-blue-100/60 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/70 flex flex-col items-center text-center gap-8">
                <div className="relative w-full h-48 mb-12 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/challenge-2.jpg"
                    alt="시스템 구축 문제"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full">Challenge</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight leading-snug">시스템 구축 문제</h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-base md:text-lg">비용 대비 효율적인 시스템 구축과 유지보수의 어려움</p>
                <div className="flex items-center justify-center text-blue-600 gap-2 mb-4">
                  <span className="text-sm font-semibold">Solution</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-gray-900 font-semibold text-lg md:text-xl mt-2">맞춤형 시스템 개발 및 유지보수 서비스</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-tl from-white via-blue-50 to-blue-100/60 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100/70 flex flex-col items-center text-center gap-8">
                <div className="relative w-full h-48 mb-12 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/challenge-3.jpg"
                    alt="디지털 전환 문제"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-sm font-medium bg-blue-600/90 px-3 py-1 rounded-full">Challenge</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 tracking-tight leading-snug">디지털 전환 문제</h3>
                <p className="text-gray-600 leading-relaxed mb-10 text-base md:text-lg">빠르게 변화하는 디지털 환경에 대응하기 위한 전략 수립의 어려움</p>
                <div className="flex items-center justify-center text-blue-600 gap-2 mb-4">
                  <span className="text-sm font-semibold">Solution</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <p className="text-gray-900 font-semibold text-lg md:text-xl mt-2">디지털 혁신을 위한 종합 컨설팅 서비스</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 전문가 검증 프로세스 안내 */}
        <div className="max-w-2xl mx-auto my-24">
          <div className="w-full p-12 md:p-16 flex flex-col items-center mb-12 backdrop-blur-md">
            <span className="text-3xl md:text-4xl font-extrabold text-blue-800 tracking-tight mb-4 drop-shadow-sm">전문가 검증 프로세스</span>
            <p className="text-blue-900 text-lg md:text-2xl text-center font-semibold leading-relaxed max-w-xl drop-shadow-sm">
              <span className="font-bold text-blue-700">쓰인</span>은 시장에서 가장 엄격한 수준의 각 단계별 프로세스를 도입하여,<br className='hidden md:block' />
              <span className="font-extrabold text-blue-600">'검증된 품질'</span>을 약속 드립니다.
            </p>
          </div>
          <ol className="mt-14 space-y-10">
            <li className="flex items-start gap-6 md:gap-8">
              <span className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">1</span>
              <div>
                <span className="block text-xl font-semibold text-gray-900 mb-2 tracking-tight leading-snug">포트폴리오 및 이력서 심사</span>
                <span className="block text-gray-700 text-base md:text-lg leading-relaxed">경력과 프로젝트 경험을 꼼꼼히 검토합니다.</span>
              </div>
            </li>
            <li className="flex items-start gap-6 md:gap-8">
              <span className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">2</span>
              <div>
                <span className="block text-xl font-semibold text-gray-900 mb-2 tracking-tight leading-snug">핵심 역량 및 기술 평가</span>
                <span className="block text-gray-700 text-base md:text-lg leading-relaxed">실제 업무에 필요한 역량과 기술을 평가합니다.</span>
              </div>
            </li>
            <li className="flex items-start gap-6 md:gap-8">
              <span className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">3</span>
              <div>
                <span className="block text-xl font-semibold text-gray-900 mb-2 tracking-tight leading-snug">커뮤니케이션 및 문제해결 능력 심층 인터뷰</span>
                <span className="block text-gray-700 text-base md:text-lg leading-relaxed">실제 상황을 가정한 인터뷰로 소통과 문제해결 능력을 검증합니다.</span>
              </div>
            </li>
            <li className="flex items-start gap-6 md:gap-8">
              <span className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg">4</span>
              <div>
                <span className="block text-xl font-semibold text-gray-900 mb-2 tracking-tight leading-snug">평판 및 이전 프로젝트 피드백 검토</span>
                <span className="block text-gray-700 text-base md:text-lg leading-relaxed">이전 프로젝트의 평판과 피드백을 꼼꼼히 확인합니다.</span>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
} 