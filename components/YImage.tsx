import { __SbImageBaseURL__, __SbImageServer__ } from '@/libs/constants';

type Props = {
  height: number;
  width: number;
  name?: string;
  filename: string;
  className?: string;
  alt?: string;
};

/**
 * Picture component compatible with storyblok image component
 */
const YImage: React.FC<Props> = ({
  filename: original,
  width,
  height,
  className,
  alt,
}) => {
  const webp = original ? createSrcSet('webp', width, height, original) : '';
  const png = original ? createSrcSet('png', width, height, original) : '';

  const pictureComponent = (
    <div className={className} style={{ width, height }}>
      <picture>
        <source srcSet={webp} type="image/webp" />
        <img alt={alt} srcSet={png} />
      </picture>
    </div>
  );

  return pictureComponent;
};

/**
 * Creates scrSet for stoyrblok image server
 * @param format image format
 * @param width
 * @param height
 * @param original original url: https://a.storyblok.com/{filaname}
 * @returns storyblok srcSet with req params
 */
export const createSrcSet = (
  format: string,
  width: number,
  height: number,
  original: string
) => {
  const filename = original.replace(__SbImageBaseURL__, '');

  const sizeArgs = `/${width}x${height}`;

  const filters = `/filters:format(${format})`;

  return [__SbImageServer__, sizeArgs, filters, filename].join('');
};

export default YImage;
