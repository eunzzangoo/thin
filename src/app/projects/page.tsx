'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  budget: string;
  period: string;
  location: string;
  keywords: string[];
  createdAt: string;
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // 임시 데이터
  const projects: Project[] = [
    {
      id: '1',
      title: '웹사이트 리뉴얼 프로젝트',
      description: '기존 웹사이트를 모던한 디자인으로 리뉴얼하고자 합니다.',
      budget: '500만원 ~ 1000만원',
      period: '1개월',
      location: '서울',
      keywords: ['웹개발', '디자인', 'UI/UX'],
      createdAt: '2024-03-20',
    },
    // 더 많은 프로젝트 데이터 추가 가능
  ];

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'it', name: 'IT·프로그래밍' },
    { id: 'design', name: '디자인' },
    { id: 'marketing', name: '마케팅' },
    { id: 'media', name: '영상·사진·음향' },
    { id: 'planning', name: '기획' },
  ];

  const sortOptions = [
    { id: 'latest', name: '최신순' },
    { id: 'deadline', name: '마감임박순' },
    { id: 'budget', name: '금액높은순' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">프로젝트</h1>
          <p className="text-gray-600">다양한 프로젝트를 찾아보세요</p>
        </div>

        {/* 필터 및 정렬 섹션 */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            {/* 카테고리 필터 */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* 정렬 옵션 */}
            <div className="flex gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setSortBy(option.id)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    sortBy === option.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 프로젝트 목록 */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">{project.title}</h2>
                  <span className="text-sm text-gray-500">{project.createdAt}</span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">예산:</span>
                    <span>{project.budget}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">기간:</span>
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">지역:</span>
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 새 프로젝트 등록 버튼 */}
        <div className="fixed bottom-8 right-8">
          <Link
            href="/register"
            className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            <span className="mr-2">+</span>
            새 프로젝트 등록
          </Link>
        </div>
      </div>
    </main>
  );
} 