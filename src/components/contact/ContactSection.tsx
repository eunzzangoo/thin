'use client';

import { useEffect } from 'react';

export default function ContactSection() {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ChannelIO) {
      window.ChannelIO('showMessenger');
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-16">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-gray-900">
            무엇을 도와드릴까요?
          </h1>
          <p className="text-xl text-gray-600">
            간단한 채팅으로 빠르게 문의하실 수 있어요!
          </p>
          <div className="flex flex-col items-center space-y-4">
            <p className="text-gray-500">
              채팅창이 자동으로 열립니다. 채팅창이 열리지 않았다면 아래 버튼을 클릭해주세요.
            </p>
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.ChannelIO) {
                  window.ChannelIO('showMessenger');
                }
              }}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              채팅 시작하기
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 