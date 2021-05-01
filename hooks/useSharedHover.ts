import { useState } from 'react';

interface SharedHoverHook {
  (defaultCard: number): {
    onHoverStart: (card: number) => void;
    onHoverEnd: () => void;
    hoveredCard: number;
  };
}

const useSharedHover: SharedHoverHook = (defaultCard) => {
  const [hoveredCard, setHoveredCard] = useState(defaultCard);
  const [timeout, newTimeout] = useState<NodeJS.Timeout>();

  const onHoverStart = (card: number) => {
    if (timeout) clearTimeout(timeout);
    setHoveredCard(card);
  };

  const onHoverEnd = () => {
    newTimeout(setTimeout(() => setHoveredCard(defaultCard), 100));
  };

  return { onHoverStart, onHoverEnd, hoveredCard };
};

export default useSharedHover;
