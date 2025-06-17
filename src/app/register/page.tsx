'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [keywords, setKeywords] = useState<string[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    budget: '',
    period: '',
    location: '',
    contactMethod: 'email',
    contactInfo: '',
  });

  const handleAddKeyword = () => {
    if (currentKeyword.trim() && !keywords.includes(currentKeyword.trim())) {
      setKeywords([...keywords, currentKeyword.trim()]);
      setCurrentKeyword('');
    }
  };

  const handleRemoveKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter(keyword => keyword !== keywordToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddKeyword();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API 연동
    console.log({ ...formData, keywords });
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">새 프로젝트 등록</h1>
              <p className="mt-3 text-sm sm:text-base text-gray-600">프로젝트 정보를 입력해주세요</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* 프로젝트 제목 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  프로젝트 제목
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="프로젝트 제목을 입력해주세요"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* 프로젝트 설명 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  프로젝트 설명
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="프로젝트에 대한 상세 설명을 입력해주세요"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors h-32 resize-none"
                  required
                />
              </div>

              {/* 키워드 입력 섹션 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  프로젝트 주요 키워드
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value={currentKeyword}
                    onChange={(e) => setCurrentKeyword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="예: 개발, 설계, 디자인, 마케팅, 사무보조"
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  />
                  <button
                    type="button"
                    onClick={handleAddKeyword}
                    className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium whitespace-nowrap"
                  >
                    추가
                  </button>
                </div>
                
                {/* 선택된 키워드 표시 */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {keywords.map((keyword) => (
                    <div
                      key={keyword}
                      className="flex items-center gap-1 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      <span>{keyword}</span>
                      <button
                        type="button"
                        onClick={() => handleRemoveKeyword(keyword)}
                        className="text-blue-500 hover:text-blue-700 transition-colors"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* 예산 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    예산
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="예산을 입력해주세요"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* 기간 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    프로젝트 기간
                  </label>
                  <input
                    type="text"
                    name="period"
                    value={formData.period}
                    onChange={handleInputChange}
                    placeholder="예: 3개월, 6개월"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* 지역 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    지역
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="지역을 입력해주세요"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>

                {/* 연락 방법 */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    연락 방법
                  </label>
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="email">이메일</option>
                    <option value="phone">전화번호</option>
                    <option value="kakao">카카오톡</option>
                  </select>
                </div>
              </div>

              {/* 연락처 */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  연락처
                </label>
                <input
                  type="text"
                  name="contactInfo"
                  value={formData.contactInfo}
                  onChange={handleInputChange}
                  placeholder="연락처를 입력해주세요"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>

              {/* 제출 버튼 */}
              <div className="flex justify-end pt-6">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-base sm:text-lg font-medium shadow-sm hover:shadow-md"
                >
                  프로젝트 등록하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
} 