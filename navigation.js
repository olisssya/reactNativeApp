import { Navigation } from "react-native-navigation";
import HomeScreen from "./Screens/HomeScreen";
import HeroScreen from "./Screens/HeroScreen";

Navigation.registerComponent(`HomeScreen`, () => HomeScreen);
Navigation.registerComponent(`HeroScreen`, () => HeroScreen);

export const showHero = () =>
  Navigation.setRoot({
    root: {
      stack: {
        id: "stackMain",
        children: [
          {
            component: {
              name: "HomeScreen",
            },
          },
          {
            component: {
              name: "HeroScreen",
            },
          },
        
        ],
      },
    },
  });
