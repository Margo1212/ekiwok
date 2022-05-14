import Image from 'next/image';
import React from 'react';

type AvatarProps = {
  username: string;
  src: string;
  size: keyof typeof sizes;
};

const sizes = {
  sm: 45,
  lg: 110,
};

const Avatar = ({ username, src, size }: AvatarProps) => {
  return (
    <div className="flex flex-col justify-items-center justify-center">
      <Image src={src} alt={`${username} avatar`} layout="intrinsic" width={sizes[size]} />
      <p>{username}</p>
    </div>
  );
};

export default Avatar;
