import Badge from '../components/Badge/Badge';
import { Card } from '../components/Card/Card';
import Icon from '../components/Icon/Icon';
import { Input } from '../components/Input/Input';
import { Navigation } from '../components/Navigation/Navigation';
import { Text } from '../components/Text/text';

const Game = () => {
  const users = ['Basia', 'Kasia', 'Andrzej', 'Grzesiek', 'Ania'];

  return (
    <div className="h-screen">
      <Navigation />
      <div className="h-88v grid grid-cols-3 grid-rows-2 gap-x-20 gap-y-12 px-12 py-8 mobile:flex mobile:flex-wrap mobile:items-stretch mobile:h-130v">
        <div className="mobile:grow mobile:m-7">
          <Card paddingX="md">
            <Text>Do zgadnięcia:</Text>
            <Text>Nie możesz użyć:</Text>
          </Card>
        </div>
        <div className="mobile:hidden">
          <Card paddingX="sm">
            <Text>Kliknij aby wysłać:</Text>
          </Card>
        </div>
        <div className="row-span-2 mobile:basis-1/2 mobile:order-last mobile:grow">
          <Card paddingX="sm">
            <div className="w-full h-full flex items-end">
              <Input sizeOfInput="sm" iconPosition="right" icon={<Icon type={'emotikon'} size={'sm'} />} />
            </div>
          </Card>
        </div>
        <div className="col-span-2  mobile:basis-1/6">
          <div className="w-full h-full flex justify-between items-center mobile:flex-col">
            {users.map((user, idx) => (
              <div key={idx} className="flex flex-col">
                <Text>{user}</Text>
                <Badge count={3} variant="outlined" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
