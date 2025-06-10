'use client';

const projects = [
  {
    title: 'AR 기술 활용',
    company: 'LG생활건강',
    description: 'AR 기술 기반으로 자사 제품 사용 전/후 변화를 효과적으로 보여주는 프로그램 개발',
    category: '도매 및 소매업',
  },
  {
    title: '해외 전문 영상 제작',
    company: 'Naver',
    description: '해외 런칭 홍보 영상 제작. 서비스에 대한 이해 및 해외 고객층에 대한 이해를 기반으로 효과적인 영상을 제작',
    category: 'IT·솔루션',
  },
  {
    title: '금융 관련 영상 제작',
    company: '신한금융투자',
    description: '디지털로 진행하는 투자 관련 서비스 유관 영상 제작. 금융 관련 메시지가 정확하게 전달될 수 있는 영상 제작',
    category: '금융·보험',
  },
  {
    title: '프로모션 페이지 개발',
    company: '우아한형제들',
    description: '프로모션을 위한 페이지 개발. 다양한 모션 및 효과가 필요한 개발로 백엔드/프론트엔드/디자인을 포함하는 개발 진행',
    category: 'IT·솔루션',
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            주요 프로젝트
          </h2>
          <p className="text-xl text-gray-600">
            다양한 기업들과 함께한 프로젝트를 소개합니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="text-sm text-blue-600 mb-2">{project.category}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <div className="text-gray-600 mb-4">{project.company}</div>
              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 