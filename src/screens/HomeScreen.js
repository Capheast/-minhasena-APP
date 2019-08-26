import React, { useLayoutEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { CapView, CapBackground } from '../styles';
import Card, { CardSkeleton } from '../components/Card';
import CardHeader, { CardHeaderSkeleton } from '../components/CardHeader';
import colors from '../styles/colors';
import api from '../utils/api';

const cards = Array(6).fill(0);

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch();
  const lotteries = useSelector(({ data }) => data);

  useLayoutEffect(() => {
    api('/setup').then(({ data }) => {
      dispatch({ type: 'SET_LOTTERIES', data: data.data });
    });

    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }, []);

  return (
    <CapView flex={1} mHorizontal={24} bgColor={colors.backgroundColor}>
      <CapView mTop={56}>
        {lotteries.items && lotteries.items.length ? (
          <CardHeader title={lotteries.title} />
        ) : (
          <CardHeaderSkeleton />
        )}
      </CapView>
      <CapBackground flex={1} showsVerticalScrollIndicator={false}>
        <CapView mBottom={56}>
          <FlatList
            data={lotteries.items}
            ListEmptyComponent={() => cards.map((card, index) => <CardSkeleton key={index} />)}
            keyExtractor={item => item.title}
            extraData={lotteries}
            ItemSeparatorComponent={() => <CapView margin={6} />}
            renderItem={({ item, index }) => (
              <Card
                onPress={() => navigation.navigate('Lottery', { index })}
                title={item.title}
                subTitle={item.subTitle}
                bgColor={item.color}
              />
            )}
          />
        </CapView>
      </CapBackground>
    </CapView>
  );
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};
