import YHeading from '@/components/YHeading/YHeading';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

export default {
  title: 'Heading',
  component: YHeading,
};

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

  return (
    <div>
      {resultValues.map((value: FontSize, index) => (
        <>
          <div className="p-4" key={value}>
            <YHeading {...getProps(value)}>
              {resultTitles[index]} Heading
            </YHeading>
          </div>
        </>
      ))}
    </div>
  );
};

export const Sizes = (): JSX.Element => formatEnum(FontSize, 'size');

export const Weights = (): JSX.Element => formatEnum(FontWeight, 'weight');

export const LineHeights = (): JSX.Element =>
  formatEnum(FontLineHeight, 'lineHeight');
