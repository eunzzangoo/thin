'use client';

import { 
  CodeBracketIcon, 
  UserGroupIcon, 
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  BriefcaseIcon,
  PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const services = [
  {
    title: '시스템·솔루션 개발',
    description: '기업 맞춤형 시스템 및 솔루션 개발 서비스를 제공합니다.',
    icon: CodeBracketIcon,
  },
  {
    title: 'App·Web 개발',
    description: '모바일 앱과 웹 서비스 개발을 전문적으로 진행합니다.',
    icon: DocumentTextIcon,
  },
  {
    title: '개발자 채용',
    description: '검증된 개발자 인력 채용 서비스를 제공합니다.',
    icon: UserGroupIcon,
  },
  {
    title: '디자인·마케팅',
    description: 'UI/UX 디자인 및 마케팅 전략 수립을 지원합니다.',
    icon: PresentationChartLineIcon,
  },
  {
    title: '영상·사진',
    description: '프로모션 영상 및 제품 사진 촬영 서비스를 제공합니다.',
    icon: BriefcaseIcon,
  },
  {
    title: '컨설팅',
    description: 'IT 프로젝트 기획 및 컨설팅 서비스를 제공합니다.',
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            중장기 프로젝트 개발부터 단기 인력 충원까지
          </h2>
          <p className="text-xl text-gray-600">
            다양한 IT 서비스를 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 