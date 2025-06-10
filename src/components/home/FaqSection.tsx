'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: '무엇이 다른가요?',
    answer: '전문가 서비스를 의뢰인이 직접 검색한 후 거래하며, 빠르고 편리한 중/저가 서비스 구매에 적합합니다. 의뢰인이 작성한 요청 사항을 기반으로 전담 매니저가 전문가를 추천하며, 상담/논의가 필요한 고가 프로젝트, 정부 지원 자금 활용 등에 적합합니다.',
  },
  {
    question: '매니저는 어떻게 배정되나요?',
    answer: '등록된 프로젝트 내용을 검토한 후, 전담 매니저 배정 여부를 결정하여 알림 및 유선을 통해 알려드립니다.',
  },
  {
    question: '모든 프로젝트에 전담 매니저가 배정되나요?',
    answer: '네, 엔터프라이즈에서 진행이 가능한 모든 프로젝트는 전담 매니저가 배정됩니다.',
  },
  {
    question: '정부지원사업에 선정되었는데, 외주 진행 가능한가요?',
    answer: '네 가능합니다. 정부지원사업 전담 매니저가 지원 사업별 요구사항에 맞는 계약 / 결제 방식을 제시해드립니다. 또한 행정절차 지원, 하나의 계약에 여러 분야의 전문가 통합 투입 등 계약 체결 전 과정과 과업 마무리 단계까지 지원해드립니다.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-600">
            궁금하신 점을 확인하세요
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full py-6 text-left flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 