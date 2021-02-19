import YCard, { createChildren as Card } from './YCard';

import { CardColor, CardSize, CardType } from '@/enums/components';

const description = 'Personalized suggestion';
const title = 'Cart Suggestion';

export default {
  title: 'Card',
  component: YCard,
};

export const Default = (): JSX.Element => (
  <YCard title={title} description={description} />
);

export const Colors = (): JSX.Element => (
  <div className="grid grid-cols-10">
    <YCard className="col-span-2 drop-shadow" color={CardColor.White} />
    <YCard className="col-span-2 drop-shadow" color={CardColor.Blue} />
    <YCard className="col-span-2 drop-shadow" color={CardColor.Gray} />
    <YCard className="col-span-2 drop-shadow" color={CardColor.Green} />
    <YCard className="col-span-2 drop-shadow" color={CardColor.Orange} />
  </div>
);

export const Stacks = (): JSX.Element => (
  <div className="absolute grid grid-cols-10">
    <YCard className="col-span-2 drop-shadow" color={CardColor.White} />
    <YCard className="relative col-span-2 drop-shadow" color={CardColor.Blue} />
    <Card
      className="absolute left-6.5 -top-3.6 drop-shadow"
      color={CardColor.Gray}
    />
    <YCard className="col-span-2 drop-shadow" color={CardColor.Green} />
    <YCard className="col-span-2 drop-shadow" color={CardColor.Orange} />
  </div>
);

// export const InGrid = (): JSX.Element => (
//   <div className="grid grid-cols-12">
//     <YCard
//       className="col-span-4"
//       type={CardType.FillWhite}
//       size={CardSize.MD}
//       title={title}
//       description={description}
//     />
//     <YCard
//       className="col-span-4"
//       type={CardType.TransparentBlue}
//       size={CardSize.SM}
//     />
//     <YCard
//       className="col-span-4"
//       type={CardType.TransparentGreen}
//       size={CardSize.XS}
//     />
//   </div>
// );
