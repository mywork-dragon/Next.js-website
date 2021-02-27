import YCard from './YCard';
import CartIcon from '@/assets/icons/cart.svg';

const dummyProps = {
  description: 'Personalized suggestion',
  title: 'Cart Upsell',
};
export default {
  title: 'Card',
  component: YCard,
};

export const Default = (): JSX.Element => (
  <>
    <YCard
      {...dummyProps}
      className="inline-block mx-8"
      cardClasses="hover:card-blue"
      Icon={<CartIcon />}
    />
    <YCard
      {...dummyProps}
      className="inline-block"
      cardClasses="card-blue hover:card-white"
    />
  </>
);

export const Colors = (): JSX.Element => (
  <div className="grid gap-8 grid-cols-10">
    <YCard className="col-span-2" />
    <YCard className="col-span-2" cardClasses="card-gray" />
    <YCard className="col-span-2" cardClasses="card-blue" />
    <YCard className="col-span-2" cardClasses="card-green" />
    <YCard className="col-span-2" cardClasses="card-orange" />
  </div>
);

export const Transparent = (): JSX.Element => (
  <div className="grid gap-8 grid-cols-10">
    <YCard className="col-span-2" cardClasses="card-white-transparent" />
    <YCard className="col-span-2" cardClasses="card-gray-transparent" />
    <YCard className="col-span-2" cardClasses="card-blue-transparent" />
    <YCard className="col-span-2" cardClasses="card-green-transparent" />
    <YCard className="col-span-2" cardClasses="card-orange-transparent" />
  </div>
);
