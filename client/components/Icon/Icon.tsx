import { FaceIcon, PersonIcon } from '@radix-ui/react-icons';
import React from 'react';

const sizes = {
  sm: 15,
  md: 30,
  lg: 50,
};

type IconTypeProps = {
  type: 'user' | 'emotikon';
  size: keyof typeof sizes;
};

const Icon = ({ type, size }: IconTypeProps) => {
  return (
    <>
      <div className="p-1">
        {type === 'user' ? <PersonIcon height={sizes[size]} width={sizes[size]} /> : null}
        {type === 'emotikon' ? <FaceIcon height={sizes[size]} width={sizes[size]} /> : null}
      </div>
    </>
  );
};

export default Icon;
