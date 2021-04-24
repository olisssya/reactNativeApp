/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import HomeScreen from './Screens/HomeScreen'
import HeroScreen from './Screens/HeroScreen'



Navigation.registerComponent("HomeScreen", () => HomeScreen);
Navigation.registerComponent(`HeroScreen`, () => HeroScreen);


HomeScreen.options = {
  topBar: {
    title: {
      text: 'Главная страница',
      color: 'white'
    },
    background: {
      color: '#500805'
    }
  }
};
HeroScreen.options = {
  topBar: {
    title: {
      text: 'Назад',
      color: 'white'
    },
    background: {
      color: '#500805'
    }
  }
};


Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: "HomeScreen",
            },
          },
        ],
      },
    },
  });
});
