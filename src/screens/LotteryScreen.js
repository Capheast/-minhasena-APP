import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
import LotteryCard from '../components/partials/LotteryCard';

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

export default function LotteryScreen({ navigation }) {
  const title = navigation.getParam('title');
  const subTitle = navigation.getParam('subTitle');
  const bgColor = navigation.getParam('backgroundColor');

  useStatusBar(bgColor);

  return (
    <View>
      <LotteryCard border={false} title={title} subTitle={subTitle} backgroundColor={bgColor} />
    </View>
  );
}
