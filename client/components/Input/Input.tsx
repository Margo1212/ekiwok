import { ChangeEventHandler, InputHTMLAttributes, ReactNode, useState } from 'react';

type InputProps = {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  sizeOfInput?: 'md' | 'sm';
  onChange?: (value: string) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ placeholder, icon, iconPosition, sizeOfInput, onChange, ...props }: InputProps) => {
  const [value, setValue] = useState('');

  const size = sizeOfInput === 'sm' ? 'py-1' : 'py-3';

  const position =
    iconPosition === 'left'
      ? 'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'
      : 'absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none';

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  return (
    <div className="mt-1 relative rounded-md shadow-sm w-full">
      <div className={position}>
        <span className="text-border pl-0 sm:text-sm">{icon}</span>
      </div>
      <input
        className={`bg-background placeholder-border text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full ${size} px-12 sm:text-sm border-2 border-border rounded-xl`}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </div>
  );
};
