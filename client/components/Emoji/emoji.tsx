import { Icon } from '@iconify/react';
import React from 'react';

const sizes = {
  sm: 15,
  md: 30,
  lg: 50,
};

type EmojiTypeProps = {
  size: keyof typeof sizes;
  icon: string;
};

const Emoji = ({ icon, size }: EmojiTypeProps) => {
  return (
    <Icon icon={icon} width={sizes[size]} />
  );
};

export { Emoji };