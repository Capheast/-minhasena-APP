import React from 'react';
import { CapView } from '../../styles';
import colors from '../../styles/colors';

export default function CardHeaderSkeleton() {
  return (
    <CapView minHeight={32} padHorizontal={12} mBottom={16} radius={16} bgColor={colors.loading} />
  );
}
