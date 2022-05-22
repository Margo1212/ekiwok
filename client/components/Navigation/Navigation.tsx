import { Share1Icon } from '@radix-ui/react-icons';
import { useCopyToClipboard } from 'react-use';

import { Button } from '../Button/Button';
import { Logo } from '../Logo/logo';
import { Timer } from '../Timer/timer';

export const Navigation = () => {
  const [, copyToClipboard] = useCopyToClipboard();

  return (
    <nav className="bg-dark flex justify-between items-center px-16 mobile:p-5 border-b-4 border-primary">
      <div>
        <Logo width="270" height="76" />
      </div>
      <div>
        <Timer seconds={15} />
      </div>
      <div className="flex space-x-4">
        <div className="mobile:hidden">
          <Button text="Zasady" transparent size="sm" />
        </div>

        <Button
          onClick={() => copyToClipboard(`${window.location.href}/join`)}
          text="Link do gry"
          icon={<Share1Icon className="fill-content w-7 h-7 mr-2" />}
          size="sm"
        />
      </div>
    </nav>
  );
};
