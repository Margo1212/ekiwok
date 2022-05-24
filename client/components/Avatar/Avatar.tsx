import Image from 'next/image';
import React from 'react';

import avatar1 from './img/Avatar-1.svg';
import avatar2 from './img/Avatar-2.svg';
import avatar3 from './img/Avatar-3.svg';
import avatar4 from './img/Avatar-4.svg';
import avatar5 from './img/Avatar-5.svg';
import avatar6 from './img/Avatar-6.svg';

type AvatarProps = {
  username: string;
  avatarNo: number;
  size?: keyof typeof sizes;
};

const sizes = {
  sm: { px: 45, txt: 'text-base', gap: '' },
  lg: { px: 110, txt: 'text-3xl', gap: 'gap-3' },
};

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6];

const Avatar = ({ username, avatarNo, size = 'lg' }: AvatarProps) => {
  return (
    <div className={`m-2 flex flex-col items-center ${sizes[size].gap}`}>
      <Image src={avatars[avatarNo - 1]} alt={`${avatarNo} avatar`} layout="fixed" height={sizes[size].px} width={sizes[size].px} />
      <p className={`${sizes[size].txt} text-white`}>{username}</p>
    </div>
  );
};

export { Avatar };
