// TODO: Finish Footer component
import { HTMLAttributes, useMemo } from 'react';

import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';
import YButton from '@/components/YButton';
import MainLogo from '@/assets/icons/logo-main.svg';

import { ButtonShape, ButtonSize } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import dynamic from 'next/dynamic';

type SocialPlatform = {
  icon: string;
  link: string;
};

type Link = {
  text: string;
  link: string;
  target?: string;
};

interface Props extends HTMLAttributes<HTMLElement> {
  links: {
    first: Link[];
    second: Link[];
  };
  contactDetails: {
    street: string;
    postalCode: string;
    city: string;
    email: string;
    phoneNumber: {
      label: string;
      value: string;
    };
  };
  content: {
    heading: string;
    description: string;
  };
  socialMedia: SocialPlatform[];
  contactButton: string;
}

function Footer({
  links = { first: [], second: [] },
  contactDetails,
  content,
  socialMedia,
  contactButton,
  ...props
}: Props): JSX.Element {
  const { first: firstLinks, second: secondLinks } = links;

  const renderListItem = (link: Link) => (
    <li key={link.link} className="mb-3">
      <YLink href={link.link}>
        <a>
          <YText
            fontSize={FontSize.XXS}
            fontWeight={FontWeight.SemiBold}
            lineHeight={FontLineHeight.Loose}
            className="text-gray-300"
          >
            {link.text}
          </YText>
        </a>
      </YLink>
    </li>
  );

  return (
    <footer className="py-20 pb-18" {...props}>
      <div className="container flex flex-wrap">
        <div className="w-full mb-4 md:hidden">
          <MainLogo />
        </div>
        <div className="flex-wrap w-64 hidden md:block">
          <div className="w-full mb-4 md:mb-10">
            <MainLogo />
          </div>
          <YHeading
            fontSize={FontSize.LG}
            fontWeight={FontWeight.ExtraBold}
            className="text-gray-400 mb-3 w-full block"
            dangerouslySetInnerHTML={{
              __html: content.heading,
            }}
          />
          <YText
            fontSize={FontSize.XXS}
            fontWeight={FontWeight.SemiBold}
            lineHeight={FontLineHeight.Loose}
            className="text-gray-300 mb-3 block w-full"
          >
            {content.description}
          </YText>
          <YButton buttonSize={ButtonSize.XS} shape={ButtonShape.Round}>
            {contactButton}
          </YButton>
        </div>
        <div className="flex-1 md:flex-none md:ml-43">
          <ul>{firstLinks.map((link: Link) => renderListItem(link))}</ul>
        </div>
        <div className="flex-1 md:flex md:flex-wrap md:ml-25">
          <ul className="block mb-5.5 md:flex-1">
            {secondLinks.map((link: Link) => renderListItem(link))}
          </ul>
          <div className="md:flex-1 md:ml-25">
            <YText
              as="div"
              fontSize={FontSize.XXS}
              fontWeight={FontWeight.SemiBold}
              lineHeight={FontLineHeight.Relaxed}
              className="text-gray-300 mb-4 mt-2.5 md:mt-0"
            >
              {contactDetails.street}
              <br />
              {contactDetails.postalCode} {contactDetails.city}
            </YText>
            <YText
              as="a"
              href={`tel:${contactDetails.phoneNumber.value}`}
              fontSize={FontSize.XXS}
              fontWeight={FontWeight.SemiBold}
              lineHeight={FontLineHeight.Tight}
              className="block text-white mb-10 md:mb-4"
            >
              {contactDetails.phoneNumber.label}
            </YText>
            <div className="flex mb-10 md:mb-0">
              {socialMedia.map((platform) => {
                const Icon = useMemo(
                  () =>
                    dynamic(
                      () => import(`@/assets/icons/${platform.icon}.svg`),
                      {
                        ssr: false,
                      }
                    ),
                  []
                );

                return (
                  <div key={platform.link} className="mr-5">
                    <a href={platform.link} target="_blank" rel="noreferrer">
                      <Icon />
                    </a>
                  </div>
                );
              })}
            </div>
            <YButton
              buttonSize={ButtonSize.XS}
              shape={ButtonShape.Round}
              className="px-4 md:hidden"
            >
              {contactButton}
            </YButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
