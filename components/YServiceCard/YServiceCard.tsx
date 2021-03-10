import { m as motion, MotionProps } from 'framer-motion';

import { FontSize } from '@/enums/font';
import { ButtonShape, ButtonSize } from '@/enums/components';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YButton from '@/components/YButton';
import YLink from '@/components/YLink';

interface Button {
  text: string;
  link: string;
}

export interface Service {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  description: string;
  button: Button;
}

type Props = Service &
  MotionProps & {
    className?: string;
  };

const ServiceCard: React.FC<Props> = ({
  icon,
  title,
  subtitle,
  description,
  button,
  className,
  ...props
}) => {
  // title, subtitle, logo
  const topSection = (
    <div className="flex w-full justify-between items-center pb-5 px-7.5 border-soft-white border-b md:px-8 md:pb-6">
      <div>
        <YHeading fontSize={FontSize.MD} as="h2">
          {title}
        </YHeading>
        <YText fontSize={FontSize.XS} as="p">
          {subtitle}
        </YText>
      </div>
      <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center">
        {icon}
      </div>
    </div>
  );

  // splits description and creates bullet points
  /**
   * @TODO review this in case it will be passed differently,
   * or needs to be shortened for smaller breakpoints */
  const createPoints = (string: string) =>
    string.split(',').map((subStr) => `- ${subStr.trim()}`);

  const descriptionPoints = (
    <ul className="px-7.5 pt-5 md:px-8 md:pt-6">
      {createPoints(description).map((line) => (
        <YText
          fontSize={FontSize.XS}
          className="py-1 text-white opacity-50"
          as="li"
        >
          {line.trim()}
        </YText>
      ))}
    </ul>
  );

  const buttonElement = (
    <YLink href={button.link}>
      <YButton
        className="absolute bottom-6 left-7.5 md:bottom-8 md:left-8"
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
  'py-6',
  'flex',
  'flex-col',
  'items-stretch',
  'md:py-8',
];

export default ServiceCard;
