import { PageBackground } from '@/enums/components';

import style from './BackgroundGradient.module.css';

interface Props {
  page: PageBackground;
}

const BackgroundGradient: React.FC<Props> = ({ page }) => {
  let content = {} as Record<PageBackground, JSX.Element>;

  content[PageBackground.Home] = (
    <>
      <div className={style.homeTop} />
      <div className={style.home1} />
      <div className={style.home2} />
      <div className={style.home3} />
    </>
  );

  content[PageBackground.About] = (
    <>
      <div className={style.about1} />
      <div className={style.about2} />
    </>
  );

  content[PageBackground.Contact] = (
    <>
      <div className={style.contact} />
    </>
  );

  content[PageBackground.Service] = (
    <>
      <div className={style.service1} />
      <div className={style.service2} />
    </>
  );

  return content[page] || null;
};

export default BackgroundGradient;
