'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    ChannelIO: any;
    ChannelIOInitialized?: boolean;
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 이미 초기화된 경우 중복 초기화 방지
    if (window.ChannelIOInitialized) {
      return;
    }

    // Channel.io 초기화 함수
    const initChannel = () => {
      if (typeof window !== 'undefined' && window.ChannelIO) {
        window.ChannelIO('boot', {
          pluginKey: '7804c491-af61-4599-925f-fe4807fe1d42',
          accessSecret: 'f490b8dd278e4f8d57ae639006f758ac',
          mobileMessengerMode: 'iframe',
          locale: 'ko',
          hideChannelButtonOnBoot: true,
          profile: {
            name: '쓰인',
            avatarUrl: '/images/logo.png'
          },
          theme: {
            'launcher': {
              'backgroundColor': '#FF6B00',
              'shape': 'circle',
              'position': 'bottom-right',
              'margin': '20px',
              'size': '56px'
            },
            'header': {
              'backgroundColor': '#FFFFFF',
              'titleColor': '#1A1A1A',
              'subtitleColor': '#666666'
            },
            'message': {
              'backgroundColor': '#FFFFFF',
              'textColor': '#1A1A1A'
            },
            'userMessage': {
              'backgroundColor': '#FF6B00',
              'textColor': '#FFFFFF'
            },
            'background': {
              'backgroundColor': '#FFFFFF',
              'backgroundImage': 'linear-gradient(135deg, #FFF5F0 0%, #FFFFFF 50%, #FFF5F0 100%)',
              'backgroundSize': 'cover'
            }
          }
        }, (error: any, user: any) => {
          if (error) {
            console.error('Channel.io initialization error:', error);
          } else {
            console.log('Channel.io initialized successfully:', user);
            window.ChannelIOInitialized = true;
            
            // 경로 체크 및 채팅창 열기 (1초 딜레이)
            const currentPath = window.location.pathname;
            const isContactPage = currentPath === '/contact' || currentPath === '/contact/';
            console.log('Current path:', currentPath, 'Is contact page:', isContactPage);
            
            if (isContactPage) {
              console.log('Opening chat on contact page...');
              setTimeout(() => {
                window.ChannelIO('showChat');
              }, 1000);
            }
          }
        });

        // 채널 설정 업데이트
        window.ChannelIO('updateChannel', {
          name: '쓰인',
          description: '일과 사람이 만나는 곳',
          profile: {
            name: '쓰인',
            avatarUrl: '/images/logo.png'
          }
        });
      }
    };

    // Channel.io가 정의되지 않은 경우를 위한 폴백
    if (typeof window !== "undefined" && window.ChannelIO === undefined) {
      window.ChannelIO = function () {
        (window.ChannelIO.q = window.ChannelIO.q || []).push(arguments);
      };
    }

    // 스크립트가 이미 로드되어 있는지 확인
    const existingScript = document.querySelector('script[src="https://cdn.channel.io/plugin/ch-plugin-web.js"]');
    if (!existingScript) {
      // 스크립트 로드 후 초기화
      const script = document.createElement('script');
      script.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      script.async = true;
      script.onload = initChannel;
      document.head.appendChild(script);
    } else {
      // 스크립트가 이미 있는 경우 바로 초기화
      initChannel();
    }

    return () => {
      if (window.ChannelIO) {
        window.ChannelIO('shutdown');
        window.ChannelIOInitialized = false;
      }
    };
  }, []);

  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
