import DataPulse, { Background } from './DataPulse';

import { props } from './storiesData';

import style from './DataPulse.module.css';

export default {
  title: 'Data Pulse',
  component: DataPulse,
};

export const Default = (): JSX.Element => <DataPulse {...props} />;

// export const SectionBackground = (): JSX.Element => (
//   <div className="relative h-screen w-screen">
//     <Background
//       cards={props.cards}
//       className={['absolute top-20 left-10', style.skew].join(' ')}
//     />
//   </div>
// );
