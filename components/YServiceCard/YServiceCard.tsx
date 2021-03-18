import { m as motion, MotionProps } from 'framer-motion';

import { FontSize } from '@/enums/font';
import { ButtonShape, ButtonSize } from '@/enums/components';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YButton from '@/components/YButton';
import YLink from '@/components/YLink';
import { useWindowWidth } from '@react-hook/window-size';
import { BreakPoint, ScreenSize } from '@/enums/screenSize';

enum TextSection {
  Heading = 'heading',
  Text = 'text',
}

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
  const windowWidth = useWindowWidth();
  const screenSize =
    windowWidth < BreakPoint.SM
      ? ScreenSize.XS
      : windowWidth < BreakPoint.MD
      ? ScreenSize.SM
      : ScreenSize.MD;

  // title, subtitle, logo
  const topSection = (
    <div className="flex w-full justify-between items-center border-soft-white border-b pb-3 px-4 sm:pb-5 sm:px-7.5 md:px-8 md:pb-6">
      <div>
        <YHeading {...getTextProps(TextSection.Heading, screenSize)} as="h2">
          {title}
        </YHeading>
        <YText {...getTextProps(TextSection.Text, screenSize)} as="p">
          {subtitle}
        </YText>
      </div>
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex flex-shrink-0 items-center justify-center">
        {icon}
      </div>
    </div>
  );

  const points = createPoints(description, screenSize);

  const descriptionPoints = (
    <ul className="px-4 pt-3 sm:px-7.5 sm:pt-5 md:px-8 md:pt-6">
      {points.map((line) => (
        <YText
          {...getTextProps(TextSection.Text, screenSize)}
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

const getTextProps = (textSection: TextSection, screenSize: ScreenSize) => {
  // filter small screen since props for SM and MD are the same
  const size = screenSize == ScreenSize.XS ? ScreenSize.XS : ScreenSize.MD;

  return textProps[textSection][size];
};

const textProps = {
  [TextSection.Heading]: {
    [ScreenSize.MD]: {
      fontSize: FontSize.MD,
    },
    [ScreenSize.XS]: {
      fontSize: FontSize.XS,
    },
  },
  [TextSection.Text]: {
    [ScreenSize.MD]: {
      fontSize: FontSize.XS,
    },
    [ScreenSize.XS]: {
      fontSize: FontSize.XXS,
    },
  },
} as Record<TextSection, Record<ScreenSize, Parameters<typeof YText>[0]>>;

// splits description and creates bullet points
/**
 * @TODO review this in case it will be passed differently,
 * or needs to be shortened for smaller breakpoints */
const createPoints = (string: string, screenSize: ScreenSize) => {
  // split points
  const points = string.split(',').map((subStr) => `- ${subStr.trim()}`);

  // filter according to size
  const displayItems = screenSize == ScreenSize.XS ? 4 : 6;
  return points.slice(0, displayItems);
};

const containerClasses = [
  'flex',
  'flex-col',
  'items-stretch',
  'overflow-hidden',
  'py-5',
  'sm:py-6',
  'md:py-8',
];

export default ServiceCard;
