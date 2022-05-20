import React from 'react';

const variants = {
  outlined: { color: 'text-primary', bg: '', border: 'border-primary' },
  filled: { color: 'text-dark', bg: 'bg-primary', border: 'border-dark' },
};

const sizes = {
  sm: { height: 'h-10', width: 'w-10', border: 'border-2', txtSize: 'text-xl' },
  lg: { height: 'h-24', width: 'w-24', border: 'border-4', txtSize: 'text-5xl' },
};

type BadgeProps = {
  count?: number;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
};

const Badge = ({ count = 0, size = 'lg', variant = 'outlined' }: BadgeProps) => {
  return (
    <div>
      <div
        className={`
          mx-4
          flex
          justify-center
          items-center
          rounded-full
          ${sizes[size].border}
          ${variants[variant].border}
          ${sizes[size].width}
          ${sizes[size].height}
          ${variants[variant].bg}
        `}
      >
        <p className={`font-semibold ${sizes[size].txtSize} ${variants[variant].color}`}>{count}</p>
      </div>
    </div>
  );
};

export { Badge };
