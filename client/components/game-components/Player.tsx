import { Avatar } from 'components/Avatar/Avatar';
import { Badge } from 'components/Badge/Badge';

export type PlayerProps = {
  id: string;
  name: string;
  score: number;
  avatarId: number;
};

export const Player = ({ name, avatarId, score }: PlayerProps) => {
  return (
    <div className="flex flex-col">
      <Avatar username={name} avatarNo={avatarId} />
      <Badge count={score} variant="outlined" />
    </div>
  );
};
