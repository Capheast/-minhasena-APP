import React, { useLayoutEffect, useState } from 'react';
import { StatusBar, ScrollView, View } from 'react-native';
import LotteryCard from '../components/partials/LotteryCard';
import { CapText, Divider } from '../components/ui';
import { MSButton } from '../components/partials/MSButton';
import ConfigWhell from '../assets/images/ConfigWhell.svg';
import { ButtonIcon } from '../components/partials/ButtonIcon';
import { ConfigurationModal } from '../components/partials/ConfigurationModal';
import NumberContainer from '../components/partials/NumberContainer';

export default function LotteryScreen({ navigation }) {
  const lottery = navigation.getParam('lottery');
  const { color, numbersDrawn } = lottery;
  const selectedNumbers = [3, 15, 29, 33, 41, 54, 58, 60];

  useLayoutEffect(() => {
    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });
  const [modalVisible, setModalVisible] = useState(false);

  const toggle = () => setModalVisible(!modalVisible);

  return (
    <ScrollView>
      <ConfigurationModal isVisible={modalVisible} closeModal={toggle} />
      <View style={{ height: 56, backgroundColor: color }} />
      <LotteryCard border={false} lottery={lottery} />
      <View style={{ marginHorizontal: 24 }}>
        <CapText bold medium>Último sorteio</CapText>
        <CapText style={{ color: 'rgba(0,0,0,0.38)' }}>Concurso 2158 (08/06/19)</CapText>
        <CapText style={{ color }} top={8} bottom={12}>Acumulou!</CapText>
        <NumberContainer numbers={numbersDrawn} bgColor={color} />
        <Divider style={{ marginTop: 16 }} />
        <CapText top={20} bold medium>Seu jogo sorteado</CapText>
        <CapText style={{ color: 'rgba(0,0,0,0.38)' }} bottom={16}>Jogos sorteado com base nos últimos jogos</CapText>
        <NumberContainer numbers={selectedNumbers} bgColor={color} />
      </View>
      <View style={{
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
      >
        <MSButton title="Gerar novo" background={color} />
        <ButtonIcon icon={<ConfigWhell />} onPress={toggle} />
      </View>
    </ScrollView>
  );
}
