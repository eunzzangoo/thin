'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ProjectDetail } from '@/components/ProjectDetail';

type Project = {
  id: string;
  title: string;
  description: string;
  period: string;
  applicants: number;
  budget: string;
  deadline: string;
  isRemote: boolean;
  startDate: string;
  endDate: string;
  salary: string;
  clientType: string;
  workType: string;
  summary: string;
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');

  // 프로젝트 데이터
  const projects: Project[] = [
    {
      id: '1',
      title: '제어시스템 설계/PLC/HMI 자동제어 전문가',
      description: '- 제어시스템 설계, PLC, HMI 자동제어 업무 가능자(경력 5년 이상)',
      period: '6개월 이상',
      applicants: 3,
      budget: '1,800만원',
      deadline: 'D-7',
      isRemote: true,
      startDate: '2025-07-01',
      endDate: '2025-12-31',
      salary: '3,000,000원(6개월 총 18,000,000원)',
      clientType: '기업(법인ㆍ개인사업자ㆍ예비창업자)',
      workType: '원격',
      summary: '제어시스템 설계, PLC, HMI 자동제어 업무 가능자(경력 5년 이상)'
    },
    {
      id: '2',
      title: 'Wiring harness 회로 개발/설계 전문가',
      description: `Wiring harness 회로 개발/설계
PCB 설계 및 신규 전장부품 개발
해당 직무 경험자(CAD/CAD 능숙자)`,
      period: '3개월',
      applicants: 8,
      budget: '1,050만원',
      deadline: 'D-5',
      isRemote: true,
      startDate: '2025-07-01',
      endDate: '2025-09-30',
      salary: '3,500,000원(3개월 총 10,500,000원)',
      clientType: '기업(법인ㆍ개인사업자ㆍ예비창업자)',
      workType: '원격',
      summary: 'Wiring harness 회로 개발/설계, PCB 설계 및 신규 전장부품 개발'
    },
    {
      id: '3',
      title: '회계 및 사무관리 전문가',
      description: `- 주 업무 : 회계 및 사무관리 
1) 본사 및 계열사 매입매출 관리 
2) 통계관리 및 사무관리 
3) 급여 및 휴가관리 
4) 일반회계`,
      period: '12개월 이상',
      applicants: 11,
      budget: '250만원/월',
      deadline: 'D-3',
      isRemote: true,
      startDate: '2025-07-01',
      endDate: '2025-12-31',
      salary: '2,500,000원',
      clientType: '기업(법인ㆍ개인사업자ㆍ예비창업자)',
      workType: '원격',
      summary: '본사 및 계열사 매입매출 관리, 통계관리 및 사무관리, 급여 및 휴가관리, 일반회계'
    },
    {
      id: '4',
      title: '기계 설계 및 발주 전문가',
      description: '- 기계 설계, 발주서 작성 및 자재신청, 신고서류 작성',
      period: '12개월 이상',
      applicants: 2,
      budget: '350만원/월',
      deadline: 'D-10',
      isRemote: true,
      startDate: '2025-07-14',
      endDate: '',
      salary: '3,500,000원',
      clientType: '기업(법인ㆍ개인사업자ㆍ예비창업자)',
      workType: '원격',
      summary: '기계 설계, 발주서 작성 및 자재신청, 신고서류 작성'
    },
    {
      id: '5',
      title: '경리회계/영업지원 전문가',
      description: `경리회계 업무/영업지원 업무
온라인 판매 관리 및 송장 출력`,
      period: '3개월',
      applicants: 12,
      budget: '210만원/월',
      deadline: 'D-2',
      isRemote: true,
      startDate: '2025-07-01',
      endDate: '2025-09-30',
      salary: '2,100,000원',
      clientType: '기업(법인ㆍ개인사업자ㆍ예비창업자)',
      workType: '원격',
      summary: '경리회계 업무/영업지원 업무, 온라인 판매 관리 및 송장 출력'
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
            <ProjectDetail key={project.id} project={project} />
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