import React from 'react';
import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import LotteryCard from '../LotteryCard';
import { CapText } from '../../ui';

const cardHeader = (title, index) => {
  const isFirst = index === 0;
  return (
    <CapText title={isFirst} big={!isFirst} bold top={isFirst ? 0 : 16} bottom={16}>
      {title}
    </CapText>
  );
};

export default function LotteryContainer() {
  const lotteries = useSelector(({ data }) => data);

  return (
    <View>
      {lotteries
        && lotteries.map((lottery, index) => (
          <FlatList
            key={lottery.title}
            data={lottery.items}
            ListHeaderComponent={() => cardHeader(lottery.title, index)}
            renderItem={({ item }) => <LotteryCard lottery={item} />}
            keyExtractor={item => item.title}
          />
        ))}
    </View>
  );
}
