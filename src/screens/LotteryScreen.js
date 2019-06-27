import React, { useLayoutEffect } from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import LotteryCard from '../components/partials/LotteryCard';
import NumberDraw from '../components/partials/NumberDrawn';
import { CapText, Divider } from '../components/ui';

export default function LotteryScreen({ navigation }) {
  const title = navigation.getParam('title');
  const subTitle = navigation.getParam('subTitle');
  const bgColor = navigation.getParam('backgroundColor');

  useLayoutEffect(() => {
    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });

  return (
    <ScrollView>
      <View style={{ height: 56, backgroundColor: bgColor }} />
      <LotteryCard border={false} title={title} subTitle={subTitle} backgroundColor={bgColor} />
      <View style={{ marginHorizontal: 24 }}>
        <CapText bold medium>Último sorteio</CapText>
        <CapText style={{ color: 'rgba(0,0,0,0.38)' }}>Concurso 2158 (08/06/19)</CapText>
        <CapText style={{ color: bgColor }} top={8} bottom={12}>Acumulou!</CapText>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <NumberDraw number="02" bgColor={bgColor} />
          <NumberDraw number="14" bgColor={bgColor} />
          <NumberDraw number="28" bgColor={bgColor} />
          <NumberDraw number="32" bgColor={bgColor} />
          <NumberDraw number="40" bgColor={bgColor} />
          <NumberDraw number="53" bgColor={bgColor} />
        </View>
        <Divider style={{ marginTop: 16 }} />
        <CapText top={20} bold medium>Seu jogo sorteado</CapText>
        <CapText style={{ color: 'rgba(0,0,0,0.38)' }} bottom={16}>Jogos sorteado com base nos últimos jogos</CapText>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
          <NumberDraw number="03" bgColor={bgColor} />
          <NumberDraw number="15" bgColor={bgColor} />
          <NumberDraw number="29" bgColor={bgColor} />
          <NumberDraw number="33" bgColor={bgColor} />
          <NumberDraw number="41" bgColor={bgColor} />
          <NumberDraw number="54" bgColor={bgColor} />
          <NumberDraw number="58" bgColor={bgColor} />
          <NumberDraw number="60" bgColor={bgColor} />
        </View>
      </View>
    </ScrollView>
  );
}
