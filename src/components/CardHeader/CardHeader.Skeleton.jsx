/* @flow */
import React from 'react';
import { CapView, colors } from '../../styles';

export default function CardHeaderSkeleton() {
  return (
    <CapView
      minHeight={32}
      padHorizontal={12}
      mBottom={16}
      radius={16}
      bgColor={colors.loading}
    />
  );
}
