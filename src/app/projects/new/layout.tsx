export default function NewProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">프로젝트 등록</h1>
          <p className="mt-2 text-sm text-gray-600">
            프로젝트의 상세 정보를 입력해주세요.
          </p>
        </div>
        {children}
      </div>
    </div>
  );
} 