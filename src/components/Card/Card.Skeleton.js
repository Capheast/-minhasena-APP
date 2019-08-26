import React from 'react';
import { CapView } from '../../styles';
import colors from '../../styles/colors';

export default function CardSkeleton() {
  return (
    <CapView minHeight={120} padHorizontal={12} mBottom={16} radius={8} bgColor={colors.loading} />
  );
}
