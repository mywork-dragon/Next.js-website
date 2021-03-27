import React, { useState } from 'react';
import {
  AnimatePresence,
  m as motion,
  AnimationFeature,
  ExitFeature,
  MotionConfig,
} from 'framer-motion';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YButton from '@/components/YButton';
import YHeading from '@/components/YHeading';
import YLink from '@/components/YLink';
import YText from '@/components/YText';

/**@TODO make this dynamic import */
import DialogBox from './DialogBox';

import Arrow from '@/assets/icons/arrow-lg.svg';

interface ButtonProps {
  link: string;
  text: string;
}

interface Review {
  text: string;
  stats: string;
  name: string;
  role: string;
  logo: JSX.Element;
}

interface Props {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  reviews?: Review[];
}

enum ReviewSection {
  Body = 'body',
  Credentials = 'credentials',
}

const Reviews: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  reviews,
}) => {
  const [currentReview, setCurrentReview] = useState(0);

  const review = reviews[currentReview];

  const setNextReview = () => {
    const nextReview = (currentReview + 1) % reviews.length;
    setCurrentReview(nextReview);
  };

  /**
   * Dialog icon
   */
  const icon = (
    <div className="relative w-25 h-17.6 mx-auto mb-8 md:absolute md:h-53 md:w-15 md:-left-25 md:-top-1">
      <div className="absolute left-0 top-0 h-full w-20.1 md:w-12">
        <img
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/left.png"
          className="object-contain"
        />
      </div>
      <div className="absolute right-0 top-0 h-14 w-16 md:h-10.5 md:w-9">
        <img
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/right.png"
          className="object-contain"
        />
      </div>
    </div>
  );

  /**
   * Title, description and contact button section with icon on top / floating left
   */
  const textBox = (
    <div className="relative md:absolute md:-left-103 md:top-1/2 md:transform md:-translate-y-1/2 md:w-76.6 md:text-left">
      {icon}
      <div className="flex justify-center text-center items-center flex-wrap md:block md:text-left">
        <YHeading
          fontSize={FontSize.XL}
          fontWeight={FontWeight.ExtraBold}
          as="h1"
          className="order-1 mr-5.5 md:text-3xl md:leading-18 md:font-bold"
        >
          {title}
        </YHeading>
        <YText
          fontSize={FontSize.SM}
          lineHeight={FontLineHeight.Relaxed}
          className="text-gray-300 order-3 mt-3 md:text-base md:leading-11"
          as="p"
        >
          {description}
        </YText>
        <YLink href={buttonProps.link}>
          <YButton
            buttonSize={ButtonSize.XS}
            shape={ButtonShape.Round}
            className="bg-blue-100 order-2 py-1.6 px-3 md:text-base md:leading-11 md:py-2 md:px-5 md:rounded md:shadow-blue md:mt-5"
          >
            {buttonProps.text}
          </YButton>
        </YLink>
      </div>
    </div>
  );

  /**
   * Body of review with review text and stats
   */
  const reviewBody = (
    <div className="relative w-78.6 h-72.6 mx-auto md:w-157.6 md:h-80 md:mx-0">
      <DialogBox />
      <div
        onClick={setNextReview}
        className="absolute cursor-pointer top-1/2 right-0 transform translate-x-1/4 -translate-y-full w-15 h-15 rounded-full flex p-4 bg-gray-500 bg-opacity-60 md:w-20 md:h-20 md:p-6 md:-translate-y-1/2"
      >
        <Arrow />
      </div>
      <article className="w-full h-full p-5 pr-10 pb-15 mt-8 md:mt-0 md:pt-10 md:pl-13 md:pr-15 md:pb-21 overflow-hidden">
        <AnimatePresence exitBeforeEnter>
          <motion.div
            {...getMotionProps(ReviewSection.Body)}
            className="overflow-hidden"
            key={review.name}
          >
            <YText
              fontWeight={FontWeight.SemiBold}
              fontSize={FontSize.SM}
              lineHeight={FontLineHeight.Relaxed}
              className="mb-4 md:text-lg md:leading-12"
              as="p"
            >
              {review.text}
            </YText>
            <YText
              fontWeight={FontWeight.ExtraBold}
              fontSize={FontSize.SM}
              lineHeight={FontLineHeight.Relaxed}
              className="text-primary md:text-lg md:leading-12"
              as="p"
            >
              {review.stats}
            </YText>
          </motion.div>
        </AnimatePresence>
      </article>
    </div>
  );

  /**
   * Reviewer info with name, role and company
   */
  const reviewCredentials = (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="flex justify-center items-center w-full md:justify-start md:mt-2 md:transform"
        {...getMotionProps(ReviewSection.Credentials)}
        key={review.name}
      >
        <div className="mr-6 md:ml-13.6">{review.logo}</div>
        <div>
          <YText
            fontWeight={FontWeight.ExtraBold}
            fontSize={FontSize.SM}
            className="md:text-lg md:leading-12"
            as="p"
          >
            {review.name}
          </YText>
          <YText
            fontSize={FontSize.SM}
            className="text-gray-300 md:text-lg md:leading-12"
            as="p"
          >
            {review.role}
          </YText>
        </div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <MotionConfig features={[AnimationFeature, ExitFeature]}>
      <section className="w-full overflow-hidden border-b border-soft">
        <div className="container pt-12.5 pb-23 md:pt-35 md:pb-48">
          <div className="md:ml-103">
            <div className="relative md:w-156">
              {textBox}
              {reviewBody}
            </div>
            {reviewCredentials}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

const getMotionProps = (section: ReviewSection) =>
  section == ReviewSection.Body
    ? motionProps
    : {
        ...motionProps,
        initial: { ...motionProps.initial, x: motionProps.exit.x },
        exit: { ...motionProps.exit, x: motionProps.initial.x },
      };

const motionProps = {
  initial: { x: -200, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 200, opacity: 0 },
  transition: { duration: 0.2 },
};

export default Reviews;
