import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import LotteryCard from '../LotteryCard';
import { CapText } from '../ui';

const cardHeader = (title, index) => {
  const isFirst = index === 0;
  return (
    <CapText title={isFirst} big={!isFirst} bold top={isFirst ? 0 : 16} bottom={16}>
      {title}
    </CapText>
  );
};

export default function LotteryContainer({ lotteries }) {
  return (
    <ScrollView>
      {lotteries && lotteries.map((lottery, index) => (
        <FlatList
          key={lottery.title}
          data={lottery.items}
          ListHeaderComponent={() => cardHeader(lottery.title, index)}
          renderItem={({ item }) => (
            <LotteryCard
              title={item.title}
              subTitle={item.subTitle}
              backgroundColor={item.color}
            />
          )}
          keyExtractor={item => item.title}
        />
      ))
      }
    </ScrollView>
  );
}

LotteryContainer.propTypes = {
  lotteries: PropTypes.arrayOf(PropTypes.object).isRequired
};
