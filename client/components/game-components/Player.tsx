import { PlayerSerialized } from '@shared';
import { Avatar } from 'components/Avatar/Avatar';
import { Badge } from 'components/Badge/Badge';
import { useNewRound } from 'modules/gameplay/hooks/useNewRound';

export type PlayerProps = {
  id: string;
  name: string;
  score: number;
  avatarId: number;
  currentPlayer?: PlayerSerialized;
};

export const Player = ({ id, name, avatarId, score, currentPlayer }: PlayerProps) => {
  const payload = useNewRound();

  const currentPlayerId = payload?.currentPlayer.id ?? currentPlayer?.id;

  const variant = currentPlayerId === id ? 'filled' : 'outlined';
  return (
    <div className="flex flex-col">
      <Avatar username={name} avatarNo={avatarId} />
      <Badge count={score} variant={variant} />
    </div>
  );
};
