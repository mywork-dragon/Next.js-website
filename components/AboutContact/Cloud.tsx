import React from 'react';

import YServiceButton from '@/components/YServiceButton';

import User from '@/assets/icons/user.svg';
import Sale from '@/assets/icons/sale.svg';
import Email from '@/assets/icons/email.svg';
import UserVoice from '@/assets/icons/user-voice.svg';
import Analise from '@/assets/icons/analise.svg';
import Mobile from '@/assets/icons/mobile.svg';
import Megaphone from '@/assets/icons/megaphone.svg';
import Code from '@/assets/icons/code.svg';
import Analitics from '@/assets/icons/analytics.svg';

const Cloud: React.FC<{ className?: string }> = ({ className }) => {
  const boxes = (
    <>
      <Box className="left-12.5 top-0 text-primary md:border-none md:text-blue-100 md:bg-blue-350">
        <UserVoice />
      </Box>
      <Box className="left-42.1 top-14.1">
        <Code />
      </Box>
      <Box className="left-76.6 top-5.5 md:bg-primary md:bg-opacity-30 md:border-none">
        <Email />
      </Box>
      <Box className="left-100 top-43 blur-3 text-primary">
        <UserVoice />
      </Box>
      <Box className="top-35 right-31.1 border-primary text-primary md:border-none md:bg-blue-350">
        <Sale />
      </Box>
      <Box className="left-0 top-61.6 blur-5">
        <User />
      </Box>
      <Box className="left-12 bottom-21.6 text-primary md:text-blue-100 md:border-none md:bg-blue-350">
        <Mobile />
      </Box>
      <Box className="bottom-26 right-20 blur-3 text-primary border-primary md:right-2.5">
        <Megaphone />
      </Box>
      <Box className="bottom-5 right-28.5 text-primary md:bg-primary md:bg-opacity-30 md:border-none">
        <Analise />
      </Box>
    </>
  );

  const servicesButtons = (
    <>
      <YServiceButton
        className="absolute w-65 left-110 top-13 md:border-blue-100 md:text-blue-100"
        icon={<Analitics />}
        title="Data & Analitics"
        interactive={false}
      />
      <YServiceButton
        className="absolute w-65 left-22.5 top-37.5 text-white border-primary"
        icon={
          <div className="w-full h-full text-primary">
            <User />
          </div>
        }
        title="Personalization"
        interactive={false}
      />
      <YServiceButton
        className="absolute w-65 left-37.5 bottom-48.5 blur-3"
        icon={<Email />}
        title="E-mail marketing"
        interactive={false}
      />
      <YServiceButton
        className="absolute w-65 top-58.5 right-0 md:border-primary md:text-white"
        icon={
          <div className="w-full h-full text-primary">
            <UserVoice />
          </div>
        }
        title="Affiliate Marketing"
        interactive={false}
      />
      <YServiceButton
        className="absolute w-65 left-70 bottom-25 md:border-blue-100 md:text-blue-100"
        icon={<Email />}
        title="E-mail marketing"
        interactive={false}
      />
      <YServiceButton
        className="absolute w-70 left-43.6 bottom-0 blur-3"
        icon={
          <div className="w-full h-full text-primary">
            <Megaphone />
          </div>
        }
        title="Social media advertising"
        interactive={false}
      />
      <YServiceButton
        className="absolute w-70 -left-35 -bottom-20 blur-3 md:hidden"
        icon={
          <div className="w-full h-full text-primary">
            <Megaphone />
          </div>
        }
        title="Social media advertising"
        interactive={false}
      />
    </>
  );

  return (
    <div className={containerClasses.join(' ')}>
      {boxes}
      {servicesButtons}
    </div>
  );
};

const containerClasses = [
  'absolute',
  'text-white-40',
  'select-none',
  'cursor-normal',
  'top-0',
  '-left-7.5',
  'h-130.1',
  'w-185.1',
  'scale-left-65',
  'md:transform',
  'md:left-100',
  'md:top-1/2',
  'md:-translate-y-1/2',
  'md:translate-x-0',
  'md:scale-100',
];

const Box: React.FC<{ className?: string }> = ({ className, children }) => (
  <div className={[...boxClasses, className].join(' ')}>{children}</div>
);

const boxClasses = [
  'absolute',
  'rounded-lg',
  'fill-current',
  'flex',
  'items-center',
  'justify-center',
  'border',
  'border-soft-white',
  'px-5',
  'py-4',
  'h-15',
  'w-16.6',
];

export default Cloud;
