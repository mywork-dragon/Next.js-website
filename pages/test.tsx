import YButton from '@/components/YButton';
import { ButtonSize } from '@/enums/components';

const Test = (): JSX.Element => {
  return (
    <div className="p-10">
      <YButton size={ButtonSize.XS}>Test</YButton>
    </div>
  );
};

export default Test;
