import { User } from '@shared';
import { useUserJoined } from 'modules/auth/hooks/useUserJoined';

import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';

export type UsersProps = {
  users: User[];
};

const Users = ({ users }: UsersProps) => {
  const payload = useUserJoined();
  const players = payload?.users?.length > 0 ? payload.users : users;

  return (
    <div className="col-span-2 mobile:basis-1/6 h-full flex justify-between mobile:flex-col">
      {players.map((player, idx) => (
        <div key={idx} className="flex flex-col">
          <Avatar username={player.name} avatarNo={1} />
          <Badge count={3} variant="outlined" />
        </div>
      ))}
    </div>
  );
};

export { Users };
