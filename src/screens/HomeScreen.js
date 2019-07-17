import React, { useLayoutEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';
import { CapContainer } from '../components/ui';
import LotteryContainer from '../components/partials/LotteryContainer';
import Colors from '../styles/colors';

export default function HomeScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  });

  const lotteries = useSelector(({ data }) => data);

  return (
    <SafeAreaView style={{ backgroundColor: Colors.backgroundColor }}>
      <CapContainer mTop={56} mHorizontal={24}>
        <LotteryContainer lotteries={lotteries} />
      </CapContainer>
    </SafeAreaView>
  );
}
