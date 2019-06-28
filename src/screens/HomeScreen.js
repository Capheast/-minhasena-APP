import React, { useLayoutEffect } from 'react';
import { ScrollView, SafeAreaView, StatusBar } from 'react-native';
import { withNavigation } from 'react-navigation';
import Styles from '../styles';
import LotteryContainer from '../components/partials/LotteryContainer';

const lotteries = [{
  title: 'Escolha o sorteio',
  items: [{
    title: 'Mega Sena',
    subTitle: 'Sorteio atual de R$180 milhões',
    color: '#00B758',
    numbersDrawn: [8, 18, 20, 24, 36, 45]
  }, {
    title: 'Quina',
    subTitle: 'Sorteio atual de R$80 mil',
    color: '#42338B',
    numbersDrawn: [29, 33, 64, 68, 74]
  }]
}, {
  title: 'Fique de olho',
  items: [{
    title: 'Lotofácil',
    subTitle: 'Sorteio atual de R$420 mil',
    color: '#AB1D88',
    numbersDrawn: [2, 7, 8, 9, 10, 11, 16, 18, 19, 20, 21, 22, 23, 24, 25]
  }]
}, {
  title: 'Outros',
  items: [{
    title: 'Lotomania',
    subTitle: 'Sorteio atual de R$1.6 milhões',
    color: '#f78100',
    numbersDrawn: [0, 5, 14, 27, 30, 34, 36, 40, 43, 44, 55, 65, 68, 76, 78, 85, 88, 92, 98, 99]
  }]
}];

function App({ navigation }) {
  useLayoutEffect(() => {
    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('dark-content');
    });
  });

  return (
    <SafeAreaView style={{ backgroundColor: '#FFF' }}>
      <ScrollView showsVerticalScrollIndicator={false} style={Styles.container}>
        <LotteryContainer lotteries={lotteries} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default withNavigation(App);
