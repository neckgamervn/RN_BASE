import { Dimensions } from "react-native";

const dimension = ({ width, height } = Dimensions.get("window"));

const colors = {
  white: "#ffffff",
  primary: "#f3f3f3",
  primaryDark: "#125183",
  primaryDark1: "#2E384D",
  bottombarBg: "#fafafa",
  headerColor: "#1b75bc",
  headerTitle: "#FFFF",
  active: "#1b75bc",
  defaultBg: "#f3f4f6",
  inactive: "gray",
  indicator: "#24277e",
  borderTopColor: "#dedede",
  focusBottomBar: "#1b75bc",
  blurBottomBar: "#585858"
};

const sizes = {};

const fonts = {
  italic16: {
    fontSize: 16,
    fontFamily: "Roboto-Italic"
  },
  italic18: {
    fontSize: 18,
    fontFamily: "Roboto-Italic"
  },
  bold12: {
    fontFamily: "Roboto-Bold",
    fontSize: 12
  },
  bold17: {
    fontFamily: "Roboto-Bold",
    fontSize: 17
  }
};

export { colors, sizes, fonts, dimension };
