'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">th_in</h3>
            <p className="text-sm text-gray-600">
              주소입력력<br />
              대표: 인석
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  외주 개발
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  인력 채용
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  컨설팅
                </Link>
              </li>
            </ul>
          </div>

          {/* 고객 지원 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  자주 묻는 질문
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-blue-600">
                  문의하기
                </Link>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">연락처</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                고객센터: 1544-6254
              </li>
              <li className="text-sm text-gray-600">
                운영시간: 10:30 ~ 18:00
              </li>
              <li className="text-sm text-gray-600">
                (점심시간 13:00 ~ 14:00)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © 2024 kmong Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 