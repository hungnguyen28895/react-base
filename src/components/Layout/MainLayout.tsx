import * as React from 'react';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-grow flex-shrink-0 basis-auto flex-col">
      <div className="flex flex-[1_auto] min-w-0 flex-col [transition:_padding-left_0.3s_ease] pt-[74px] pl-[265px]">
        {children}
      </div>
    </div>
  );
};
