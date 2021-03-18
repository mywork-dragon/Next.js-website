import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YTeamCard, { TeamMember } from '@/components/YTeamCard/YTeamCard';
import YHeading from '@/components/YHeading';

interface Props {
  title: string;
  team: TeamMember[];
}

const AboutTeam: React.FC<Props> = ({ title, team }) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  return (
    <section className="container relative md:mb-26 text-left">
      <YHeading
        {...titleProps[screenSize]}
        className="text-blue-100 mb-7 w-36 lg:absolute lg:top-0 lg:left-0 lg:w-56.1"
      >
        {title}
      </YHeading>
      <div className="grid grid-cols-1 gap-5 lg:ml-80 md:grid-cols-2 md:gap-x-15 md:gap-y-13">
        {team.map((member) => (
          <YTeamCard className="w-full h-82.5 md:h-90" {...member} />
        ))}
      </div>
    </section>
  );
};

const titleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    lineHeight: FontLineHeight.Relaxed,
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Loose,
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

export default AboutTeam;
