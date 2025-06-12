'use client';

import { CurrencyDollarIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: '고객 이용료 Zero',
    description: '기업 고객에게 별도 수수료를 부과하지 않습니다.',
  },
  {
    icon: BriefcaseIcon,
    title: '전담 매니저 밀착 지원',
    description: '전문가 추천부터 계약, 관리까지 전 과정을 지원하여 고객 경험과 성공률을 극대화합니다.',
  },
  {
    icon: AcademicCapIcon,
    title: '상위 1~5% 전문가 풀',
    description: '엄격하게 검증된 최상위 전문가 그룹을 통해 프로젝트 품질을 보장합니다.',
  },
];

export default function BenefitSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="inline-block text-blue-600 mr-2">'th_in'</span>
            <span className="inline-block">이 하는 일/역할</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            쓰인은 PM 매니저의 밀착 관리로 기업에게 성공적인 프로젝트 결과를 제공합니다.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                <benefit.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 