import React, { useLayoutEffect, useState } from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../components/Card';
import colors from '../styles/colors';
import { CapBackground, CapView } from '../styles';
import NumberChoice from '../components/NumberChoice';

export default function LotteryScreen({ navigation }) {
  const index = navigation.getParam('index');
  const lottery = useSelector(({ data }) => data.items[index]);
  const {
    title, subTitle, color, numbersDrawn
  } = lottery;

  useLayoutEffect(() => {
    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });
  const [modalVisible, setModalVisible] = useState(false);

  const toggle = () => setModalVisible(!modalVisible);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.backgroundColor }}>
      <CapBackground bgColor={color}>
        <CapView minHeight={56} bgColor={color} />
        <Card withoutRadius title={title} subTitle={subTitle} bgColor={color} />
        <CapView bgColor="#FFFFFF" style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
          <CapView flex={1} mHorizontal={24}>
            <NumberChoice
              title="Seu jogo sorteado"
              subTitle="Jogos sorteado com base nos últimos jogos"
              color={color}
              drawn={numbersDrawn}
            />
          </CapView>
        </CapView>
      </CapBackground>
    </SafeAreaView>
  );
}

LotteryScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object])).isRequired
};
