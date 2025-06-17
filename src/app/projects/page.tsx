'use client';

import { useState } from 'react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  period: string;
  applicants: number;
  budget: string;
  deadline: string;
  isRemote: boolean;
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // 프로젝트 데이터
  const projects: Project[] = [
    {
      id: '1',
      title: '전기/계장 제어시스템 설계, PLC, HMI 자동제어 업무',
      description: '액상 포장용 충진기 등 자동화 기계의 제어시스템 설기(PLC, HMI) 업무를 담당할 경력 5년 이상의 전문가를 모집합니다',
      period: '6개월 이상',
      applicants: 3,
      budget: '1,800만원',
      deadline: 'D-15',
      isRemote: true,
    },
    {
      id: '2',
      title: '전장부품(전자/전기장치) 개발/설계',
      description: 'Wiring harness 회로 개발/설계',
      period: '3개월',
      applicants: 8,
      budget: '1,050만원',
      deadline: 'D-15',
      isRemote: true,
    },
    {
      id: '3',
      title: '건설물폐기물처리장 경영지원부 회계 업무',
      description: '건설폐기물처리장 경영지원부 회계 직원을 모집합니다',
      period: '12개월 이상',
      applicants: 11,
      budget: '250만원/월',
      deadline: 'D-28',
      isRemote: true,
    },
    {
      id: '4',
      title: '기계설계(플랜트공학) 경력자 모집',
      description: '기계설계(플랜트공학), 경력 3년 이상의 전문가를 모집합니다',
      period: '12개월 이상',
      applicants: 2,
      budget: '350만원/월',
      deadline: 'D-15',
      isRemote: true,
    },
    {
      id: '5',
      title: '사무 관리직 모집',
      description: '사무 관리직 경력 1년 이상의 전문가를 모집합니다',
      period: '3개월',
      applicants: 12,
      budget: '210만원/월',
      deadline: 'D-15',
      isRemote: true,
    },
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
                  <div className="flex items-center gap-2">
                    {project.isRemote && (
                      <span className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs font-medium">
                        원격
                      </span>
                    )}
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                      모집 {project.deadline}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <span className="font-medium">기간:</span>
                    <span>{project.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">지원자:</span>
                    <span>{project.applicants}명</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="font-medium">예산:</span>
                    <span>{project.budget}</span>
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