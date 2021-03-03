import React, { useState } from 'react';
import { m as motion, MotionConfig, AnimationFeature } from 'framer-motion';

import YLink from '../YLink';
import YButton from '../YButton';
import YText from '../YText';
import Toggle from './MenuToggle';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

// Main Props
interface Logo {
  Icon: JSX.Element;
  link: string;
}

interface SubItem {
  Icon: any; // string if .png
  text: string;
  link: string;
}

interface NavItem {
  text: string;
  link: string;
  subItems?: SubItem[];
}

interface Button {
  text: string;
  link: string;
}

interface Props {
  logo: Logo;
  navItems: NavItem[];
  button: Button;
}

const menuItemClasses = [
  'absolute',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
];

const menuTextProps = {
  fontSize: FontSize.XS,
  lineHeight: FontLineHeight.Relaxed,
  fontWeight: FontWeight.SemiBold,
} as Parameters<typeof YText>[0];

const Header: React.FC<Props> = ({ logo, navItems, button }) => {
  const [open, setOpen] = useState(false);

  const navItemsContainer = (
    <div className="container">
      {navItems.map((item, index) => (
        <div
          key={item.text}
          className={[
            'relative h-14.1 border-gray-300',
            index < navItems.length - 1 ? 'border-b' : ' ',
          ].join(' ')}
        >
          <YLink href={item.link}>
            <YText
              className="relative top-1/2 transform -translate-y-1/2 text-gray-300"
              {...menuTextProps}
            >
              {item.text}
            </YText>
          </YLink>
          <div className="overflow-hidden h-0">
            {item.subItems?.map((subItem) => (
              <YLink href={subItem.link}>
                <YText {...menuTextProps} className="my-5 text-gray-300">
                  {subItem.text}
                </YText>
              </YLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="fixed top-0 left-0 right-0 h-15.5">
      <div className="relative h-15.5 w-full">
        <Toggle
          className={[...menuItemClasses, 'left-4'].join(' ')}
          onClick={() => setOpen(!open)}
          open={open}
        />
        <div
          className={[...menuItemClasses, 'left-1/2 -translate-x-1/2'].join(
            ' '
          )}
        >
          <YLink href={logo.link}>{logo.Icon}</YLink>
        </div>
        <YLink href={button.link}>
          <YButton
            buttonSize={ButtonSize.XS}
            shape={ButtonShape.Round}
            className={[...menuItemClasses, 'right-4'].join(' ')}
          >
            {button.text.split(' ')[0]}
          </YButton>
        </YLink>
      </div>
      {navItemsContainer}
    </section>
  );
};

export default Header;
