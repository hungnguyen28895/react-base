import * as React from 'react';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="flex flex-[1_0_auto] flex-col py-[26px]">
        <div className="flex flex-[1_0_auto]">
          <div className="w-full mx-auto px-[26px]">
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
