import { Icon, IconProps } from '@iconify/react';
import React from 'react';

const sizes = {
  sm: 15,
  md: 30,
  lg: 50,
};

export type EmojiTypeProps = {
  size?: keyof typeof sizes;
  icon: string;
} & IconProps;

const Emoji = ({ icon, size = 'md', ...rest }: EmojiTypeProps) => {
  return <Icon className="inline-flex" icon={`noto:${icon}`} width={sizes[size]} {...rest} />;
};

export { Emoji };
