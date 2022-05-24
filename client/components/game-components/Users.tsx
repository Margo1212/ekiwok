/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { PlayerSerialized } from '@shared';
import { useUserJoined } from 'modules/auth/hooks/useUserJoined';
import { usePointScored } from 'modules/common/hooks/usePointScored';

import { Player } from './Player';

export type UsersProps = {
  users: PlayerSerialized[];
};

const Users = ({ users }: UsersProps) => {
  const payload = useUserJoined();
  const pointScoredPayload = usePointScored();
  let players = payload?.users?.length && payload.users.length > 0 ? payload.users : users;

  players = pointScoredPayload?.players ? pointScoredPayload.players : players;

  return (
    <div className="col-span-2 mobile:basis-1/6 h-full flex justify-between mobile:flex-col">
      {players.map(({ id, name, score, avatar }) => (
        <Player key={id} avatarId={avatar} id={id} name={name} score={score} />
      ))}
    </div>
  );
};

export { Users };
