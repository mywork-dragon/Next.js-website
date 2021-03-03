import React, { useState } from 'react';
import { m as motion, AnimatePresence, MotionProps } from 'framer-motion';

import YLink from '@/components/YLink';
import YText from '@/components/YText';

import Toggle from './MenuToggle';

import { FontSize, FontLineHeight, FontWeight } from '@/enums/font';
import { ToggleType } from '@/enums/components';

interface SubItem {
  icon: string; //temp
  text: string;
  link: string;
}

export interface NavItemInterface {
  text: string;
  link: string;
  subItems?: SubItem[];
  motionProps?: MotionProps;
}

const NavItem: React.FC<NavItemInterface & { className?: string }> = ({
  className,
  link,
  text,
  subItems,
  motionProps,
}) => {
  const [openItems, setOpenItems] = useState(false);

  return (
    <>
      <motion.div
        {...itemMotionProps}
        className={[className, 'relative'].join(' ')}
      >
        <YLink href={link}>
          <YText
            className="relative top-1/2 transform -translate-y-1/2 text-gray-300"
            {...menuTextProps}
            as="p"
          >
            {text}
          </YText>
        </YLink>
        {subItems && (
          <Toggle
            type={ToggleType.Plus}
            open={openItems}
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            onClick={() => setOpenItems(!openItems)}
          />
        )}
      </motion.div>
      <motion.div
        layout
        animate={openItems ? 'open' : 'closed'}
        {...motionProps}
        className="overflow-hidden"
      >
        <AnimatePresence>
          {openItems &&
            subItems.map((subItem, index) => (
              <motion.div
                key={subItem.text}
                className={['relative', index == 0 ? 'pt-1 pb-5' : 'py-5'].join(
                  ' '
                )}
                layout
                {...itemMotionProps}
              >
                <Toggle
                  type={ToggleType.Plus}
                  className="inline-block transform translate-y-0.5"
                />
                <YLink href={subItem.link}>
                  <YText
                    className="text-gray-300 inline-block ml-4"
                    {...menuTextProps}
                    as="p"
                  >
                    {subItem.text}
                  </YText>
                </YLink>
              </motion.div>
            ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const menuTextProps = {
  fontSize: FontSize.XS,
  lineHeight: FontLineHeight.Relaxed,
  fontWeight: FontWeight.SemiBold,
} as Parameters<typeof YText>[0];

const itemMotionProps = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export default NavItem;
