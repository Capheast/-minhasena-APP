/* @flow */
import React, { useLayoutEffect } from 'react';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { CapView, Divider, colors } from '../styles';
import NumberChoice from '../components/NumberChoice';
import { generateLotteryNumbers, formatDate } from '../utils';

type Props = {
  navigation: Object,
};

export default function LotteryScreen({ navigation }: Props) {
  const index = navigation.getParam('index');
  const dispatch = useDispatch();
  const { selectedGames, lottery } = useSelector(({ lotteries }) => ({
    selectedGames: lotteries.myGamesSelected,
    lottery: lotteries.data.items[index],
  }));
  const { title, subTitle, color, numbersDrawn } = lottery;

  useLayoutEffect(() => {
    navigation.addListener('willFocus', () => {
      StatusBar.setBarStyle('light-content');
    });
  });
  // const [modalVisible, setModalVisible] = useState(false);

  // const toggle = () => setModalVisible(!modalVisible);

  return (
    <CapView flex={1} bgColor={color}>
      <CapView mTop={56}>
        <Card withoutRadius title={title} subTitle={subTitle} bgColor={color} />
      </CapView>
      <CapView
        flex={1}
        bgColor={colors.backgroundColor}
        style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
        <CapView flex={1} mHorizontal={24} padTop={16}>
          <NumberChoice
            title="Seu jogo sorteado"
            subTitle="Jogos sorteado com base nos últimos jogos"
            color={color}
            selectedNumbers={selectedGames[title] || []}
            drawnNumbers={numbersDrawn}
            submitTitle="Gerar Novo Jogo"
            onSubmit={() =>
              dispatch({
                type: 'SET_GAMES_SELECTED',
                lottery: title,
                selected: generateLotteryNumbers(1, 60, numbersDrawn.length),
              })
            }
          />
          <Divider mVertical={16} />
          <NumberChoice
            title="Último sorteio"
            subTitle={`Concurso ${lottery.drawId} (${formatDate(
              lottery.date,
            )})`}
            color={color}
            drawnNumbers={numbersDrawn}
            withoutSubmit
          />
        </CapView>
      </CapView>
    </CapView>
  );
}
