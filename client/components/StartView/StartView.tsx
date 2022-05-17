import { ReactElement } from 'react';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';
import { Logo } from '../Logo/logo';
import { Text } from '../Text/text';

const StartView = () => {
  return (
    <div className="flex items-center space-y-24 flex-col mt-24">
      <Logo />
      <div className="flex  items-center space-y-9 flex-col">
        <Text>Aby ropoczac podaj swoj pseudonim</Text>
        <div className="max-w-md">
          <Input sizeOfInput="md" placeholder="" icon={<Icon type="user" size="md" />} iconPosition="left" />
        </div>
        <div>
          <Text>i kliknij tu</Text>
        </div>
      </div>
      <div className="flex-row  space-x-24 justify-around">
        <Button text="ZASADY GRY" transparent />
        <Button text="ZACZNIJ GRĘ" />
      </div>
    </div>
  );
};
StartView.getLayout = (page: ReactElement) => page;
export default StartView;
