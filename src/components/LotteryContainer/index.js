import React from 'react';
import { ScrollView, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import LotteryCard from '../LotteryCard';
import { CapText } from '../ui';

export default function LotteryContainer({ lotteries }) {
  return (
    <ScrollView>
      {lotteries && lotteries.map(lottery => (
        <FlatList
          key={lottery.title}
          data={lottery.items}
          ListHeaderComponent={() => <CapText title bold bottom={16}>{lottery.title}</CapText>}
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
