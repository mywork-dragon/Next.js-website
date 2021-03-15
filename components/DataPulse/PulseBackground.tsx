import React from 'react';

import pulse from './pulse.module.css';

import Pulse1 from '@/assets/pulse/pulse-1.svg';
import Pulse2 from '@/assets/pulse/pulse-2.svg';
import Pulse3 from '@/assets/pulse/pulse-3.svg';
import Pulse4 from '@/assets/pulse/pulse-4.svg';
import Pulse5 from '@/assets/pulse/pulse-5.svg';
import Pulse6 from '@/assets/pulse/pulse-6.svg';

const PulseBackground: React.FC = () => (
  <>
    <div
      className={['absolute h-32 w-65 top-27 left-11', pulse.pulse1].join(' ')}
    >
      <Pulse1 />
    </div>
    <div
      className={['absolute h-31.5 w-50 top-23 left-99.1', pulse.pulse1].join(
        ' '
      )}
    >
      <Pulse2 />
    </div>
    <div
      className={['absolute h-5 w-34 top-20 right-0', pulse.pulse2].join(' ')}
    >
      <Pulse3 />
    </div>
    <div
      className={['absolute h-32.5 w-5 top-80 left-10', pulse.pulse2].join(' ')}
    >
      <Pulse4 />
    </div>
    <div
      className={['absolute h-32.5 w-55 top-83.1 left-94.6', pulse.pulse2].join(
        ' '
      )}
    >
      <Pulse5 />
    </div>
    <div
      className={['absolute h-32 w-65 top-111.1 left-11', pulse.pulse2].join(
        ' '
      )}
    >
      <Pulse1 />
    </div>
    <div
      className={['absolute h-5 w-34 top-105 right-0', pulse.pulse2].join(' ')}
    >
      <Pulse3 />
    </div>
    <div
      className={[
        'absolute h-61.6 w-50 bottom-25 left-99.1',
        pulse.pulse2,
      ].join(' ')}
    >
      <Pulse6 />
    </div>
    <div
      className={['absolute h-5 w-34 bottom-25 right-0', pulse.pulse2].join(
        ' '
      )}
    >
      <Pulse3 />
    </div>
  </>
);

export default PulseBackground;
