import React from 'react';

const variants = {
  outlined: { color: 'primary', bg: '' },
  filled: { color: 'dark', bg: 'primary' },
};

const sizes = {
  sm: { height: 10, border: 2, txtSize: 'xl' },
  lg: { height: 24, border: 4, txtSize: '5xl' },
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
          m-2
          flex
          justify-center
          items-center
          border-${sizes[size].border}
          border-${variants[variant].color}
          rounded-full
          w-${sizes[size].height}
          h-${sizes[size].height}
          bg-${variants[variant].bg}
        `}
      >
        <p className={`font-semibold text-${sizes[size].txtSize} text-${variants[variant].color}`}>{count}</p>
      </div>
    </div>
  );
};

export default Badge;
