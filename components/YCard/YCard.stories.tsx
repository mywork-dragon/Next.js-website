import YCard from './YCard';

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
    <YCard
      className="col-span-2"
      title={title}
      color={CardColor.White}
      description={description}
    />
    <YCard
      className="col-span-2"
      title={title}
      color={CardColor.Blue}
      description={description}
    />
    <YCard
      className="col-span-2"
      title={title}
      color={CardColor.Gray}
      description={description}
    />
    <YCard
      className="col-span-2"
      title={title}
      color={CardColor.Green}
      description={description}
    />
    <YCard
      className="col-span-2"
      title={title}
      color={CardColor.Orange}
      description={description}
    />
  </div>
);

// export const Sizes = (): JSX.Element => (
//   <>
//     <h2>Extra Small:</h2>
//     <YCard size={CardSize.XS} />
//     <h2>Small:</h2>
//     <YCard size={CardSize.SM} />
//     <h2>Regular (medium):</h2>
//     <YCard size={CardSize.MD} />
//   </>
// );

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
