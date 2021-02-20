import YCard from './YCard';
import Cart from '../Icons/Cart';
import Carousel from '../Icons/Carousel';

import { CardColor, CardType } from '@/enums/components';

const description = 'Personalized suggestion';
const title = 'Cart Upsell';

export default {
  title: 'Card',
  component: YCard,
};

export const Default = (): JSX.Element => (
  <YCard title={title} description={description} />
);

export const FillWithoutText = (): JSX.Element => (
  <div className="grid gap-8 grid-cols-10">
    <YCard className="col-span-2" Icon={Cart} color={CardColor.White} />
    <YCard className="col-span-2" Icon={Carousel} color={CardColor.Gray} />
    <YCard className="col-span-2" Icon={Cart} color={CardColor.Blue} />
    <YCard className="col-span-2" Icon={Carousel} color={CardColor.Green} />
    <YCard className="col-span-2" Icon={Carousel} color={CardColor.Orange} />
  </div>
);

export const FillWithText = (): JSX.Element => (
  <div className="grid gap-8 grid-cols-10">
    <YCard
      Icon={Cart}
      className="col-span-2"
      title={title}
      description={description}
      color={CardColor.White}
    />
    <YCard
      Icon={Cart}
      className="col-span-2"
      title={title}
      description={description}
      color={CardColor.Gray}
    />
    <YCard
      Icon={Cart}
      className="col-span-2"
      title={title}
      description={description}
      color={CardColor.Blue}
    />
    <YCard
      Icon={Carousel}
      className="col-span-2"
      title={title}
      description={description}
      color={CardColor.Green}
    />
    <YCard
      Icon={Carousel}
      className="col-span-2"
      title={title}
      description={description}
      color={CardColor.Orange}
    />
  </div>
);

export const Transparent = (): JSX.Element => (
  <div className="grid gap-8 grid-cols-10">
    <YCard
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Blue}
    />
    <YCard
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Green}
    />
    <YCard
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.White}
    />
    <YCard
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Orange}
    />
    <YCard
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Gray}
    />
    <YCard
      empty
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Blue}
    />
    <YCard
      empty
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Green}
    />
    <YCard
      empty
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.White}
    />
    <YCard
      empty
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Orange}
    />
    <YCard
      empty
      className="col-span-2"
      type={CardType.Transparent}
      color={CardColor.Gray}
    />
  </div>
);

const stack = 'absolute left-5 bottom-5 z-20';
export const Stacks = (): JSX.Element => (
  <div className="mt-8 grid grid-cols-10">
    <YCard className="relative col-span-2 drop-shadow" color={CardColor.Gray}>
      <YCard className={stack} color={CardColor.Gray}>
        <YCard className={stack} color={CardColor.Green} />
      </YCard>
    </YCard>
    <YCard className="relative col-span-2 drop-shadow" color={CardColor.Gray}>
      <YCard className={stack} color={CardColor.Green} />
    </YCard>
    <YCard
      className="relative col-span-2 drop-shadow"
      color={CardColor.Orange}
    />
    <YCard className="relative col-span-2 drop-shadow" color={CardColor.Gray}>
      <YCard className={stack} color={CardColor.Blue}>
        <YCard className={stack} color={CardColor.Gray}>
          <YCard
            Icon={Carousel}
            className={stack}
            title={title}
            description={description}
            color={CardColor.Green}
          />
        </YCard>
      </YCard>
    </YCard>
  </div>
);
