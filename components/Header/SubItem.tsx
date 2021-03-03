import React from 'react';

import Toggle from './MenuToggle';
import { ExpandableItem } from './ExpandableComponents';
import YLink from '@/components/YLink';
import YText from '@/components/YText';

import { ToggleType } from '@/enums/components';

export interface SubItemInterface {
  icon: string; //temp
  text: string;
  link: string;
}

interface Props extends SubItemInterface {
  textProps?: Parameters<typeof YText>[0];
  className?: string;
}

const SubItem: React.FC<Props> = ({ text, link, textProps, className }) => {
  return (
    <ExpandableItem className={['relative', className].join(' ')}>
      <Toggle
        type={ToggleType.Plus}
        className="inline-block transform translate-y-0.5"
      />
      <YLink href={link}>
        <YText
          className="text-gray-300 inline-block ml-4"
          {...textProps}
          as="p"
        >
          {text}
        </YText>
      </YLink>
    </ExpandableItem>
  );
};

export default SubItem;
