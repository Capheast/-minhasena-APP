import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import LotteryCard from '../components/partials/LotteryCard';
import { CapText, Divider } from '../components/ui';

function useStatusBar(bgColor, barStyle = 'light-content') {
  function setStatusBar(bg, bar) {
    StatusBar.setBarStyle(bar);
    StatusBar.setBackgroundColor(bg);
  }
  return useEffect(() => {
    setStatusBar(bgColor, barStyle);
    return () => {
      setStatusBar('#fff', 'dark-content');
    };
  });
}

const number = (num, bgColor) => (
  <View style={{
    backgroundColor: bgColor,
    height: 32,
    width: 32,
    borderRadius: 999,
    marginRight: 8
  }}
  >
    <View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}
    >
      <CapText normal secondary>{num}</CapText>
    </View>
  </View>
);

export default function LotteryScreen({ navigation }) {
  const title = navigation.getParam('title');
  const subTitle = navigation.getParam('subTitle');
  const bgColor = navigation.getParam('backgroundColor');

  useStatusBar(bgColor);

  return (
    <SafeAreaView>
      <View style={{ height: 56, backgroundColor: bgColor }} />
      <LotteryCard border={false} title={title} subTitle={subTitle} backgroundColor={bgColor} />
      <View>
        <View style={{ marginHorizontal: 24 }}>
          <CapText bold medium>Último sorteio</CapText>
          <CapText style={{ color: 'rgba(0,0,0,0.38)' }}>Concurso 2158 (08/06/19)</CapText>
          <CapText style={{ color: bgColor }} top={8} bottom={12}>Acumulou!</CapText>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 32 }}>
            {number('02', bgColor)}
            {number('14', bgColor)}
            {number('28', bgColor)}
            {number('32', bgColor)}
            {number('40', bgColor)}
            {number('53', bgColor)}
          </View>
          <Divider style={{ marginTop: 16 }} />
          <CapText top={20} bold medium>Seu jogo sorteado</CapText>
          <CapText style={{ color: 'rgba(0,0,0,0.38)' }} bottom={16}>Jogos sorteado com base nos últimos jogos</CapText>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 32 }}>
            {number('03', bgColor)}
            {number('15', bgColor)}
            {number('29', bgColor)}
            {number('33', bgColor)}
            {number('41', bgColor)}
            {number('54', bgColor)}
            {number('58', bgColor)}
            {number('60', bgColor)}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
