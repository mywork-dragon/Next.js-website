import dynamic from 'next/dynamic';
import { m as motion, MotionProps } from 'framer-motion';

import { FontSize } from '@/enums/font';
import { ButtonShape, ButtonSize } from '@/enums/components';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YButton from '@/components/YButton';
import YLink from '@/components/YLink';

import styles from './YServiceCard.module.css';

interface Button {
  text: string;
  link: string;
}

export interface Service {
  icon: string;
  title: string;
  subtitle: string;
  description: string[];
  button: Button;
}

type Props = Service &
  MotionProps & {
    className?: string;
  };

const YServiceCard: React.FC<Props> = ({
  icon,
  title,
  subtitle,
  description,
  button,
  className,
  ...props
}) => {
  const Icon = dynamic(() => import(`@/assets/icons/${icon}.svg`), {
    ssr: false,
  });

  // title, subtitle, logo
  const topSection = (
    <div className="flex w-full justify-between items-center border-soft-white border-b pb-3 px-4 sm:pb-5 sm:px-7.5 lg:px-8 lg:pb-6">
      <div>
        <YHeading
          fontSize={FontSize.XS}
          className="text-white lg:text-base lg:leading-7"
          as="h2"
        >
          {title}
        </YHeading>
        <YText
          fontSize={FontSize.XXS}
          className="text-white lg:text-xs lg:leading-5"
          as="p"
        >
          {subtitle}
        </YText>
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex flex-shrink-0 items-center justify-center">
        <Icon />
      </div>
    </div>
  );

  const descriptionPoints = (
    <ul
      className={[
        'px-4 pt-3 sm:px-7.5 sm:pt-5 lg:px-8 lg:pt-6',
        styles.points,
      ].join(' ')}
    >
      {description.map((point) => (
        <YText
          fontSize={FontSize.XXS}
          key={point}
          className="py-1 text-white opacity-50 lg:text-xs lg:leading-5"
          as="li"
        >
          {`- ${point}`}
        </YText>
      ))}
    </ul>
  );

  const buttonElement = (
    <YLink href={button.link}>
      <YButton
        className="absolute bottom-6 left-7.5 lg:bottom-8 lg:left-8"
        buttonSize={ButtonSize.XS}
        shape={ButtonShape.Round}
        shadow
      >
        {button.text}
      </YButton>
    </YLink>
  );

  return (
    <motion.div
      {...(props as MotionProps)}
      layout
      className={[...containerClasses, className].join(' ')}
    >
      {topSection}
      {descriptionPoints}
      {buttonElement}
    </motion.div>
  );
};

const containerClasses = [
  'flex',
  'flex-col',
  'items-stretch',
  'overflow-hidden',
  'py-5',
  'sm:py-6',
  'lg:py-8',
];

export default YServiceCard;
