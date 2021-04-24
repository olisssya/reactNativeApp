/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import HomeScreen from './Screens/HomeScreen'


Navigation.registerComponent("HomeScreen", () => HomeScreen);

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
