// import React, { AriaAttributes, createElement } from 'react';
// import styles from './YCard.module.css';

// import { CardType, CardSize } from '@/enums/components';

// type TextProps = AriaAttributes & {
//   title?: string;
//   description?: string;
//   type?: CardType;
// };

// type ChildrenProps = TextProps & {
//   icon?: string;
//   size?: CardSize;
// };

// type Props = ChildrenProps & {
//   as?: keyof JSX.IntrinsicElements;
//   className?: string;
// };

// enum Elements {
//   Container = 'container',
//   Shadow = 'shadow',
//   Topface = 'topface',
//   TextPlaceholder = 'textPlacehoder',
//   Title = 'title',
//   Description = 'description',
//   Icon = 'icon',
// }

// const getClassesForElement = (element: Elements, type: CardType) =>
//   [...defaultClasses[element], classesByType[type]].join(' ');

// // main component funtion
// const YCard = ({
//   as,
//   className: classes = '',
//   size,
//   ...props
// }: Props): JSX.Element => {
//   const className = [...defaultClasses[Elements.Container], classes].join(' ');
//   const CustomTag = as || 'div';

//   return createElement(
//     CustomTag,
//     {
//       className,
//     },
//     createChildren({ size })
//   );
// };

// // create children of main component
// const createChildren = ({
//   icon,
//   title,
//   description,
//   size = CardSize.MD,
//   type = CardType.FillWhite,
// }: ChildrenProps): JSX.Element => {
//   const shadowClasses = getClassesForElement(Elements.Shadow, type);
//   const topfaceClasses = getClassesForElement(Elements.Topface, type);
//   const iconClasses = getClassesForElement(Elements.Icon, type);

//   return (
//     <div className={shadowClasses}>
//       <div className={topfaceClasses}>
//         <div className={iconClasses} />
//         {createTextElements({ title, description, type })}
//       </div>
//     </div>
//   );
// };

// // create either text or placeholders
// const createTextElements = ({
//   title,
//   description,
//   type,
// }: TextProps): JSX.Element => {
//   if (!title || !description) {
//     const textPlaceholderClasses = getClassesForElement(
//       Elements.TextPlaceholder,
//       type
//     );
//     const titleClasses = [
//       textPlaceholderClasses,
//       'bottom-14.5',
//       'right-6',
//     ].join(' ');
//     const descriptionClasses = [
//       textPlaceholderClasses,
//       'right-13',
//       'bottom-8.75',
//     ].join(' ');

//     return (
//       <>
//         <div className={titleClasses} />
//         <div className={descriptionClasses} />
//       </>
//     );
//   } else {
//     const titleClasses = getClassesForElement(Elements.TextPlaceholder, type);
//     const descriptionClasses = getClassesForElement(
//       Elements.TextPlaceholder,
//       type
//     );

//     return (
//       <>
//         <div className={titleClasses}>{title}</div>
//         <div className={descriptionClasses}>{description}</div>
//       </>
//     );
//   }
// };

// const classesByType = {
//   [CardType.FillWhite]: {
//     [Elements.Shadow]: [''],
//     [Elements.Icon]: [''],
//     [Elements.Title]: [''],
//     [Elements.Description]: [''],
//     [Elements.TextPlaceholder]: [''],
//   },
//   [CardType.FillBlue]: {
//     [Elements.Shadow]: [''],
//     [Elements.Icon]: [''],
//     [Elements.Title]: [''],
//     [Elements.Description]: [''],
//     [Elements.TextPlaceholder]: [''],
//   },
//   [CardType.TransparentBlue]: {
//     [Elements.Shadow]: [''],
//     [Elements.Icon]: [''],
//     [Elements.Title]: [''],
//     [Elements.Description]: [''],
//     [Elements.TextPlaceholder]: [''],
//   },
//   [CardType.TransparentGreen]: {
//     [Elements.Shadow]: [''],
//     [Elements.Icon]: [''],
//     [Elements.Title]: [''],
//     [Elements.Description]: [''],
//     [Elements.TextPlaceholder]: [''],
//   },
// };

// const defaultClasses = {
//   [Elements.Container]: ['w-43.75', 'h-53.75', 'border', 'border-primary'],
//   [Elements.Shadow]: [
//     'relative',
//     'left-2',
//     'w-41.75',
//     'h-51.75',
//     'rounded',
//     'overflow-hidden',
//     styles.shadow,
//   ],
//   [Elements.Topface]: [
//     'absolute',
//     'left-1.75',
//     'bottom-1.75',
//     'bg-white', // type
//     'rounded',
//     'z-10',
//     'top-0',
//     'right-0',
//   ],
//   [Elements.TextPlaceholder]: [
//     'absolute',
//     'bg-blue-100',
//     'opacity-10',
//     'h-3.75',
//     'left-5',
//     'rounded-sm',
//     'mb-2',
//     styles.noText,
//   ],
// };

// export default YCard;
export default {};
