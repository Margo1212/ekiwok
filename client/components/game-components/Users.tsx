import { Avatar } from '../Avatar/Avatar';
import { Badge } from '../Badge/Badge';

const Users = () => {
  const users = ['Basia', 'Kasia', 'Andrzej', 'Grzesiek', 'Ania'];

  return (
    <div className="col-span-2 mobile:basis-1/6 h-full flex justify-between mobile:flex-col">
      {users.map((user, idx) => (
        <div key={idx} className="flex flex-col">
          <Avatar username={user} avatarNo={1} />
          <Badge count={3} variant="outlined" />
        </div>
      ))}
    </div>
  );
};

export { Users };
