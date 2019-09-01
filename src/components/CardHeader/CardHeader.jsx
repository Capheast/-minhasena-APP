/* @flow */
import React from 'react';
import { CapText } from '../../styles';

type Props = {
  title: string,
};

export default function CardHeader({ title }: Props) {
  return (
    <CapText size="title" bold mTop={16} mBottom={16}>
      {title}
    </CapText>
  );
}
