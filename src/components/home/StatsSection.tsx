'use client';

import CountUp from 'react-countup';

const stats = [
  {
    title: '프로젝트 성공률',
    value: 99,
    suffix: '%',
  },
  {
    title: '평균 계약 리드 타임',
    value: 6,
    suffix: '일',
  },
  {
    title: '누적 전문가 수',
    value: 40,
    suffix: '만+',
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="block mb-2">기업 성장의 새로운 기준</span>
              <span className="text-2xl md:text-3xl text-blue-200">우리가 만들어가는 혁신의 기록</span>
            </h2>
            <p className="text-blue-100 text-lg mt-4">
              데이터로 증명하는 우리의 전문성과 신뢰성
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 hover:bg-white/20"
              >
                <div className="text-5xl md:text-6xl font-bold text-white mb-3 flex items-center justify-center">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={200}
                    separator=","
                    className="inline-block"
                  />
                  <span className="text-blue-200 ml-2 text-4xl md:text-5xl">{stat.suffix}</span>
                </div>
                <p className="text-blue-100 text-lg font-medium">
                  {stat.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 