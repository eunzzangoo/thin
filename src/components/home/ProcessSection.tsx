'use client';

import { ArrowRightIcon } from '@heroicons/react/24/outline';

const processSteps = [
  { 
    title: '업무 수주',
    description: '고객의 요구사항을 정확히 파악하고 프로젝트 범위를 정의합니다'
  },
  { 
    title: '업무 분석',
    description: '프로젝트의 기술적 요구사항과 리소스를 분석합니다'
  },
  { 
    title: '업무 분장',
    description: '최적의 팀 구성과 역할 분담을 계획합니다'
  },
  { 
    title: '수행 인력 모집',
    description: '프로젝트에 적합한 전문가를 선별하고 구성합니다'
  },
  { 
    title: '프로젝트 수행',
    description: '체계적인 프로젝트 관리와 품질 보증을 제공합니다'
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50/50 to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            <span className="inline-block text-blue-600 mr-2">'th_in'</span>
            <span className="inline-block">의 업무 프로세스</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            고객의 프로젝트를 성공적으로 완수하기 위한 체계적인 프로세스를 제공합니다
          </p>
        </div>

        {/* Process Flow Diagram */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative group"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl flex items-center justify-center text-blue-600 font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {/* Desktop arrows */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="w-8 h-8 text-blue-400" />
                  </div>
                )}
                {/* Mobile/Tablet arrows */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block lg:hidden absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="w-8 h-8 text-blue-400 rotate-90" />
                  </div>
                )}
                {/* Last step arrow */}
                {index === processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="w-8 h-8 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
            {/* Result Block */}
            <div className="relative group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-10 shadow-lg text-center text-white transform hover:scale-105 transition-all duration-300 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">결과물 제공</h3>
                <p className="text-blue-100">
                  고객의 요구사항을 충족하는 최고 품질의 결과물을 제공합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 