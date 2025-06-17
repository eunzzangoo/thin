import { useState } from 'react';
import { Button } from './ui/button';

interface ProjectDetailProps {
  project: {
    id: string;
    title: string;
    workType: string;
    clientType: string;
    startDate: string;
    endDate: string;
    salary: string;
    description: string;
    deadline: string;
    summary: string;
  };
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border border-gray-100 rounded-xl p-6 mb-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
              원격
            </span>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
              모집 {project.deadline}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.summary}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium min-w-[80px]">진행 방식</span>
              <span>{project.workType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium min-w-[80px]">의뢰인 유형</span>
              <span>{project.clientType}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium min-w-[80px]">프로젝트 기간</span>
              <span>{project.startDate} ~ {project.endDate || '미정'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="font-medium min-w-[80px]">월 급여</span>
              <span className="text-blue-600 font-medium">{project.salary}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-end gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:bg-gray-50"
          >
            {isExpanded ? '접기' : '상세보기'}
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h4 className="font-medium text-gray-900 mb-3">프로젝트 설명</h4>
          <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
            {project.description}
          </p>
          <div className="mt-6 flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              제안하기
            </Button>
          </div>
        </div>
      )}
    </div>
  );
} 