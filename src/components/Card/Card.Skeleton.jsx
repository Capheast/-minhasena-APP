import React from 'react';
import { CapView, colors } from '../../styles';

const CardSkeleton = () => {
  return (
    <CapView
      minHeight={120}
      padHorizontal={12}
      mBottom={16}
      radius={8}
      bgColor={colors.loading}
    />
  );
};

export default CardSkeleton;
