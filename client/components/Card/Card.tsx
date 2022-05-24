import { ReactNode } from 'react';

type CardTypeProps = {
  children?: ReactNode;
  paddingX?: 'sm' | 'md';
};

const Card = ({ children, paddingX = 'sm' }: CardTypeProps) => {
  const cardPadding = paddingX === 'sm' ? 'px-5' : 'px-14';

  return (
    <div
      className={`${cardPadding} py-6 h-full text-center bg-dark opacity-90 rounded-lg shadow-md overflow-y-scroll w-full scrollbar scrollbar-track-background scrollbar-thumb-border`}
    >
      {children}
    </div>
  );
};

export { Card };
