import YCard from './YCard';

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

const stack = 'absolute left-5 bottom-5 z-20';

export const Stacks = (): JSX.Element => (
  <div className="mt-8 grid grid-cols-10 skew drop-shadow">
    <YCard className="absolute" cardClasses="card-gray">
      <YCard
        className="absolute left-6.5 -top-6.5 z-20"
        cardClasses="card-orange"
      >
        <YCard className="absolute left-6.5 -top-6.5 z-20" {...dummyProps} />
      </YCard>
    </YCard>
  </div>
);
