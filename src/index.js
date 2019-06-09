import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
});

export default createAppContainer(MainNavigator);
