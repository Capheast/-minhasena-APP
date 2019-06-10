import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';
import HomeScreen from './screens/HomeScreen';
import LotteryScreen from './screens/LotteryScreen';

const MainNavigator = FluidNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null
    }
  },
  Lottery: {
    screen: LotteryScreen
  }
});

export default createAppContainer(MainNavigator);
