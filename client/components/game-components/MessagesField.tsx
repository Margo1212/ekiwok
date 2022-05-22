import { Card } from '../Card/Card';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';

const MessagesField = () => {
  return (
    <div className="row-span-2 mobile:basis-1/2 mobile:order-last mobile:grow">
      <Card paddingX="sm">
        <div className="w-full h-full flex items-end">
          <Input sizeOfInput="sm" iconPosition="right" icon={<Icon type={'emotikon'} size={'sm'} />} />
        </div>
      </Card>
    </div>
  );
};

export { MessagesField };
