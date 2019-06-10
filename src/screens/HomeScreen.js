import React from 'react';
import { SafeAreaView } from 'react-native';
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

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <LotteryContainer lotteries={lotteries} />
    </SafeAreaView>
  );
}
