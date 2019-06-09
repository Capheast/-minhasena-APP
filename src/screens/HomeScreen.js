import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import LotteryCard from '../components/LotteryCard';
import Styles from '../styles';

export default function App() {
  return (
    <SafeAreaView style={Styles.container}>
      <Text style={Styles.headerTitle}>Escolha o sorteio</Text>
      <LotteryCard
        title="Mega Sena"
        subTitle="Sorteio atual de R$180 milhões"
        backgroundColor="#00B758"
      />
    </SafeAreaView>
  );
}
