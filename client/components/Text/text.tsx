type InputProps = {
  size?: 'text-2xl' | 'text-sm';
  children: string;
};
export const Text = ({ size = 'text-2xl', children }: InputProps) => {
  return <p className={`${size} text-white`}>{children}</p>;
};
