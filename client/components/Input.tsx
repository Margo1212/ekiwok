import { ReactNode, useState } from 'react';

type InputProps = {
  placeholder: string;
  icon: ReactNode;
  iconPosition: string;
};

export default function Input({placeholder, icon, iconPosition}: InputProps) {
  const [username, setUsername] = useState('');

    return (
        <div className="mt-1 relative rounded-md shadow-sm w-full">
          <div className={iconPosition}>
            <span className="text-gray-500 pl-0 sm:text-sm">{icon}</span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="bg-background placeholder-border text-white focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-border rounded-xl"
            placeholder={placeholder}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
          </div>
        </div>
    )
  }
  