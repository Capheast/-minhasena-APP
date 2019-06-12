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
    color: '#00B758'
  }, {
    title: 'Quina',
    subTitle: 'Sorteio atual de R$80 mil',
    color: '#42338B'
  }]
}, {
  title: 'Fique de olho',
  items: [{
    title: 'Lotofácil',
    subTitle: 'Sorteio atual de R$420 mil',
    color: '#AB1D88'
  }]
}, {
  title: 'Outros',
  items: [{
    title: 'Dupla Sena',
    subTitle: 'Sorteio atual de R$180 milhões',
    color: '#A20635'
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
