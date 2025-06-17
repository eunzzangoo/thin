'use client';

import { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 중복 초기화 방지
    if (window.ChannelIOInitialized) return;

    window.ChannelIO = window.ChannelIO || function () {
      (window.ChannelIO.q = window.ChannelIO.q || []).push(arguments);
    };

    const initChannel = () => {
      if (!window.ChannelIO) return;

      window.ChannelIO('boot', {
        pluginKey: '7804c491-af61-4599-925f-fe4807fe1d42',
        hideChannelButtonOnBoot: true,
        customLauncherSelector: '#__none__',
        locale: 'ko',
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
          console.error('Channel.io init error:', error);
          return;
        }

        window.ChannelIOInitialized = true;

        const path = window.location.pathname;

        if ((path === '/contact' || path === '/contact/') &&
            !sessionStorage.getItem('channelChatOpened')) {
          sessionStorage.setItem('channelChatOpened', 'true');
          console.log('💬 showChat 호출!');
          setTimeout(() => {
            window.ChannelIO('showChat');
          }, 800);
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
    };

    // 스크립트 중복 로딩 방지
    const existingScript = document.querySelector('script[src="https://cdn.channel.io/plugin/ch-plugin-web.js"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      script.async = true;
      script.onload = initChannel;
      document.head.appendChild(script);
    } else {
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
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
} 