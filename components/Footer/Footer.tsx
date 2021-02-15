// TODO: Finish Footer component
import { HTMLAttributes } from 'react';

import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';
import YButton from '@/components/YButton';
import MainLogo from '@/assets/icons/logo-main.svg';

import { ButtonShape, ButtonSize } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

type SocialPlatform = {
  icon: JSX.Element;
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
    phoneNumber: string;
  };
  socialMedia: SocialPlatform[];
}

function Footer({
  links = { first: [], second: [] },
  contactDetails,
  socialMedia,
  ...props
}: Props): JSX.Element {
  const { first: firstLinks, second: secondLinks } = links;

  const renderListItem = (link: Link) => (
    <li key={link.link} className="mb-3">
      <YLink as={'a'} href={link.link}>
        <YText
          fontSize={FontSize.XXS}
          fontWeight={FontWeight.Medium}
          lineHeight={FontLineHeight.Loose}
          as="a"
          className="text-gray-300"
        >
          {link.text}
        </YText>
      </YLink>
    </li>
  );

  return (
    <footer className="bg-blue-300 py-20 pb-19" {...props}>
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
            className="text-gray-400 mb-3"
          >
            The Leading
            <br /> Data Platform
          </YHeading>
          <YText
            fontSize={FontSize.XXS}
            fontWeight={FontWeight.Medium}
            lineHeight={FontLineHeight.Loose}
            className="text-gray-300 mb-3"
          >
            Join 20,000+ businesses that use Segment software and APIs to
            collect, clean, and control their customer data.
          </YText>
          <YButton buttonSize={ButtonSize.XS} shape={ButtonShape.Round}>
            Contact us
          </YButton>
        </div>
        <div className="flex-1">
          <ul>{firstLinks.map((link: Link) => renderListItem(link))}</ul>
        </div>
        <div className="flex-1">
          <ul>{secondLinks.map((link: Link) => renderListItem(link))}</ul>
          <YText
            as="div"
            fontSize={FontSize.XXS}
            fontWeight={FontWeight.Medium}
            lineHeight={FontLineHeight.Relaxed}
            className="text-gray-300 mb-4"
          >
            Vliegtuigstraat 6-M
            <br />
            1059 CL Amsterdam
          </YText>
          <YText
            as="div"
            fontSize={FontSize.XXS}
            fontWeight={FontWeight.Medium}
            lineHeight={FontLineHeight.Tight}
            className="text-white mb-7"
          >
            +31 6 40 30 17 05
          </YText>
          <div className="flex mb-7">
            {socialMedia.map((platform) => (
              <div key={platform.link} className="mr-5">
                <a href={platform.link} target="_blank" rel="noreferrer">
                  {platform.icon}
                </a>
              </div>
            ))}
          </div>
          <YButton
            buttonSize={ButtonSize.XS}
            shape={ButtonShape.Round}
            className="px-4"
          >
            Contact us
          </YButton>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
