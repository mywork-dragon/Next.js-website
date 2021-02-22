// import from node modules
import React, { useState } from 'react';

import YCard from './YCard';

const pointStyle = 'absolute h-0 w-0 border border-green-300';

export default {
  title: 'SDK',
  component: YCard,
};

// component function
export const Default: React.FC = () => {
  const [state, setState] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const safeArr = [...state];
    safeArr[index] = Number(e.target.value);
    setState([...safeArr]);
  };

  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 'auto',
    transformStyle: 'preserve-3d',
    //transform: `perspective(${state[0]}px) rotatex(${state[1]}deg) rotatey(${state[2]}deg) rotatez(${state[3]}deg) translatex(${state[4]}px) translatey(${state[5]}px) translatez(${state[6]}px)`, // rotateX(${state[1]}deg) rotateY(${state[2]}deg) rotateZ(${state[3]}deg) translateX(${state[4]}px) translateY(${state[5]}px) translateZ(${state[6]}px))`,
  } as React.CSSProperties;

  return (
    <div>
      <div>
        [{state[0]}, {state[1]}, {state[2]}, {state[3]}, {state[4]}, {state[5]}
        ])
      </div>
      <div className="mx-auto relative px-auto w-68.6 h-37.5 border border-red-300">
        <YCard style={style} title="Title" description="Subtitle">
          {/* <YCard style={style}>
            <YCard style={style} />
          </YCard> */}
        </YCard>
        <div
          id="first-match"
          className={[pointStyle, 'right-0', 'top-16.1', 'w-full'].join(' ')}
        />
        <div
          id="third-match"
          className={[pointStyle, 'left-40', 'bottom-0', 'h-full'].join(' ')}
        />
        <div
          id="fourth-match"
          className={[pointStyle, 'left-0', 'top-21.1', 'w-full'].join(' ')}
        />
      </div>
      <div className="w-full h-50 flex flex-col justify-evenly items-stretch mt-50">
        {state.map((value, index) => (
          <input
            key={index}
            type="range"
            min={[0, 1, 2, 3].includes(index) ? -180 : 0}
            max={[0, 1, 2, 3].includes(index) ? 180 : 400}
            step={1}
            value={value}
            onChange={(e) => {
              handleChange(e, index);
            }}
          />
        ))}
      </div>
    </div>
  );
};
