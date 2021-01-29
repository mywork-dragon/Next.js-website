import YText from './YText';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

export default {
  title: 'Body Text',
  component: YText,
};

export const Default = (): JSX.Element => (
  <YText>Default body text styling</YText>
);

export const Sizes = (): JSX.Element => formatEnum(FontSize, 'size');

export const Weights = (): JSX.Element => formatEnum(FontWeight, 'weight');

export const LineHeights = (): JSX.Element =>
  formatEnum(FontLineHeight, 'lineHeight');

const formatEnum = (
  obj: { [s: number]: string | number },
  prop: string
): JSX.Element => {
  const result = Object.values(obj);

  const resultValues = result
    .sort((a: number, b: number) => a - b)
    .filter((value: FontSize) => typeof value === 'number');

  const resultTitles = result
    .sort((a: number, b: number) => a - b)
    .filter((value: FontSize) => typeof value === 'string');

  const getProps = (value) => ({ [prop]: value });

  console.log(resultTitles);
  return (
    <div>
      {resultValues.map((value: FontSize, index) => (
        <>
          <div className="p-3" key={value}>
            <YText {...getProps(value)}>{resultTitles[index]} body text</YText>
          </div>
        </>
      ))}
    </div>
  );
};
