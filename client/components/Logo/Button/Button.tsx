import { ButtonHTMLAttributes, ReactNode } from 'react';


type ButtonProps = {
  text: string;
  transparent?: boolean;
  buttonSize?: 'sm' | 'md';
  icon?: ReactNode;
} & ButtonHTMLAttributes<HTMLInputElement>;

export const Button = ({ text, icon, buttonSize, transparent, onClick }: ButtonProps) => {
  const size = buttonSize === 'sm' ? 'py-2 text-xl' : 'py-3 text-2xl';
  const color = transparent ? 'text-primary' : 'text-secondary';
  const background = transparent ? 'bg-transparent' : 'bg-primary';
  const hover = 'hover:opacity-75';

  return (
    <button className={`${background} ${color} ${hover} ${size} px-4 rounded-full border-2 border-primary inline-flex items-center shadow-md`}>
      {icon}
      <span>{text}</span>
    </button>
  );
};