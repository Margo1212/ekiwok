import { FaceIcon, PersonIcon, Share1Icon } from '@radix-ui/react-icons';
import React from 'react';

const sizes = {
  sm: 15,
  md: 30,
  lg: 50,
};

type IconTypeProps = {
  type: 'user' | 'emotikon' | 'share';
  size?: keyof typeof sizes;
  className?: string;
};

const Icon = ({ type, size = 'md', className }: IconTypeProps) => {
  return (
    <div className={className}>
      {type === 'user' ? <PersonIcon height={sizes[size]} width={sizes[size]} /> : null}
      {type === 'emotikon' ? <FaceIcon height={sizes[size]} width={sizes[size]} /> : null}
      {type === 'share' ? <Share1Icon height={sizes[size]} width={sizes[size]} /> : null}
    </div>
  );
};

export default Icon;
