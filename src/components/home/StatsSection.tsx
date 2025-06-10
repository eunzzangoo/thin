'use client';

import CountUp from 'react-countup';

const stats = [
  {
    title: '연간 프로젝트 의뢰 금액',
    value: 1617,
    suffix: '억',
  },
  {
    title: '연간 프로젝트 의뢰 기업',
    value: 6800,
    suffix: '여개',
  },
  {
    title: '거래액 연평균 성장율',
    value: 35,
    suffix: '%',
  },
  {
    title: '계약 프로젝트 완수율',
    value: 98,
    suffix: '%',
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                />
                <span className="text-blue-200">{stat.suffix}</span>
              </div>
              <p className="text-blue-100 text-lg">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 