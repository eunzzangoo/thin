'use client';

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {isVisible && (
                <CountUp
                  end={1617}
                  duration={2.5}
                  separator=","
                  suffix="억"
                />
              )}
            </div>
            <div className="text-gray-600">연간 프로젝트 의뢰 금액</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {isVisible && (
                <CountUp
                  end={6800}
                  duration={2.5}
                  separator=","
                  suffix="+"
                />
              )}
            </div>
            <div className="text-gray-600">연간 프로젝트 의뢰 기업</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {isVisible && (
                <CountUp
                  end={241}
                  duration={2.5}
                  suffix="%"
                />
              )}
            </div>
            <div className="text-gray-600">거래액 연평균 성장율</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {isVisible && (
                <CountUp
                  end={99}
                  duration={2.5}
                  suffix="%"
                />
              )}
            </div>
            <div className="text-gray-600">계약 프로젝트 완수율</div>
          </div>
        </div>
      </div>
    </section>
  );
} 