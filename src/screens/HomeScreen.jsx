/* @flow */
import React, { useLayoutEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { CapView, CapBackground, colors } from '../styles';
import Card, { CardSkeleton } from '../components/Card';
import CardHeader, { CardHeaderSkeleton } from '../components/CardHeader';
import api from '../utils/api';

type Props = {
  navigation: Object,
};

const cards = Array(6).fill(0);

export default function HomeScreen({ navigation }: Props) {
  const dispatch = useDispatch();
  const lotteriesList = useSelector(({ lotteries }) => lotteries.data);

  useLayoutEffect(() => {
    api('/setup').then(({ data }) => {
      dispatch({ type: 'SET_LOTTERIES', data });
    });

    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  }, [dispatch, navigation]);

  return (
    <CapView flex={1} mHorizontal={24} bgColor={colors.backgroundColor}>
      <CapView mTop={56}>
        {lotteriesList.items && lotteriesList.items.length ? (
          <CardHeader title={lotteriesList.title} />
        ) : (
          <CardHeaderSkeleton />
        )}
      </CapView>
      <CapBackground flex={1} showsVerticalScrollIndicator={false}>
        <CapView mBottom={56}>
          <FlatList
            data={lotteriesList.items}
            ListEmptyComponent={() =>
              cards.map((card, index) => <CardSkeleton key={index} />)
            }
            keyExtractor={item => item.title}
            extraData={lotteriesList}
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
