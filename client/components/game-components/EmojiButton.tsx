import { Emoji, EmojiTypeProps } from 'components/Emoji/emoji';
import { useSendEmoji } from 'modules/gameplay/hooks/useSendEmoji';

export type EmojiButtonProps = {
  icon: EmojiTypeProps['icon'];
  disabled: boolean;
  onClick: () => void;
};

export const EmojiButton = ({ icon, disabled, onClick }: EmojiButtonProps) => {
  const sendEmoji = useSendEmoji();

  const handleClick = () => {
    if (disabled) return;
    sendEmoji({ emoji: icon });
    onClick();
  };

  return <Emoji className={disabled ? 'opacity-50' : 'cursor-pointer'} icon={icon} onClick={handleClick} />;
};
