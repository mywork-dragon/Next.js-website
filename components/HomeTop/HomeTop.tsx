import React, { AriaAttributes, HTMLAttributes } from 'react';

import { FontSize, FontWeight, FontLineHeight } from '@/enums/font';
import { ButtonSize } from '@/enums/components';

import YHeading from '../YHeading';
import YText from '../YText';
import YButton from '../YButton';
import YLink from '../YLink';

/**
 * @TODO some sort of lazy loading logic, icons passed as Elements for now
 */

type ButtonProps = AriaAttributes & {
  text: string;
  link: string;
};

interface Company {
  logo: string;
  link: string;
}

interface Card {
  icon: string;
  title: string;
  description: string;
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  showCompanies?: boolean;
  companies?: Company[];
  cards?: Card[];
}

const HomeTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  showCompanies = false,
  companies,
  cards,
  ...props
}) => {
  return (
    <section {...props}>
      <div className="mt-50 container">
        <div className="w-100">
          <YHeading
            fontSize={FontSize['4XL']}
            fontWeight={FontWeight.ExtraBold}
            lineHeight={FontLineHeight.Relaxed}
            className="mb-5"
            as="h1"
          >
            {title} <br />
          </YHeading>
          <YText
            lineHeight={FontLineHeight.Loose}
            className="text-gray-300 mb-5"
            as="p"
          >
            {description} <br />
          </YText>
          <YLink href={buttonProps.link}>
            <YButton buttonSize={ButtonSize.LG} shadow>
              {buttonProps.text}
            </YButton>
          </YLink>
        </div>
        {showCompanies && companies && (
          <div className="container h-45.5 flex justify-center items-center">
            {companies.map((company, index) => (
              <a href={company.link}>
                <div className="fill-current mx-7.5 text-white">
                  {company.logo}
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeTop;
