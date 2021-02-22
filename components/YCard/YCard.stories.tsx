import YCard from './YCard';
import Cart from '@/assets/icons/cart.svg';

const description = 'Personalized suggestion';
const title = 'Cart Upsell';

export default {
  title: 'Card',
  component: YCard,
};

export const Default = (): JSX.Element => (
  <YCard
    cardClasses="hover:card-blue"
    title={title}
    description={description}
  />
);

// export const FillWithoutText = (): JSX.Element => (
//   <div className="grid gap-8 grid-cols-10">
//     <YCard className="col-span-2" />
//     <YCard className="col-span-2" cardClasses="card-gray"  />
//     <YCard className="col-span-2" cardClasses="card-blue"  />
//     <YCard className="col-span-2" cardClasses="card-green"  />
//     <YCard className="col-span-2" cardClasses="card-orange"  />
//   </div>
// );

export const FillWithText = (): JSX.Element => (
  <div className="grid gap-8 grid-cols-10">
    <YCard className="col-span-2" title={title} description={description} />
    <YCard
      className="col-span-2"
      cardClasses="card-gray"
      title={title}
      description={description}
    />
    <YCard
      className="col-span-2"
      cardClasses="card-blue"
      title={title}
      description={description}
    />
    <YCard
      className="col-span-2"
      cardClasses="card-green"
      title={title}
      description={description}
    />
    <YCard
      className="col-span-2"
      cardClasses="card-orange"
      title={title}
      description={description}
    />
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

const stack = 'absolute left-5 bottom-5 z-20';
export const Stacks = (): JSX.Element => (
  <div className="mt-8 grid grid-cols-10 skew">
    <YCard
      className="absolute"
      cardClasses="card-gray"
      title={title}
      description={description}
    >
      <YCard
        className="absolute left-6.5 -top-6.5 z-20"
        cardClasses="card-gray"
        title={title}
        description={description}
      >
        <YCard
          className="absolute left-6.5 -top-6.5 z-20"
          cardClasses="card-white"
          title={title}
          description={description}
        />
      </YCard>
    </YCard>
  </div>
);
