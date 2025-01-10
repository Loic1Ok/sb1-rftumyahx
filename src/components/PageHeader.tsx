import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  bgImage: string;
  icon?: React.ReactNode;
}

export default function PageHeader({ title, subtitle, bgImage, icon }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-[300px] bg-cover bg-center" style={{
      backgroundImage: `url("${bgImage}")`
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col justify-center">
          <div className="animate-fadeIn">
            {icon && (
              <div className="mb-4 text-white/90 transform hover:scale-110 transition-transform">
                {icon}
              </div>
            )}
            <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-xl text-white/90 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}