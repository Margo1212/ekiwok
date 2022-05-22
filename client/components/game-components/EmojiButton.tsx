import { Emoji, EmojiTypeProps } from 'components/Emoji/emoji';
import { useSendEmoji } from 'modules/gameplay/hooks/useSendEmoji';

export type EmojiButtonProps = {
  icon: EmojiTypeProps['icon'];
};

export const EmojiButton = ({ icon }: EmojiButtonProps) => {
  const sendEmoji = useSendEmoji();

  const handleClick = () => {
    sendEmoji({ emoji: icon });
  };

  return <Emoji className="cursor-pointer" icon={icon} onClick={handleClick} />;
};
