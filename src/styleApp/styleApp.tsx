import { StyleSheet } from "react-native";

const AppStyle = StyleSheet.create({
  AppCont: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#ababab"
  },
  C: {
    width: 400,
    height: 400
  },
  fC: {
    width: 400,
    height: 400,
    borderWidth: 10,
    borderColor: "white",
    shadowColor: "black",
    shadowOffset: {
      width: -1,
      height: 1
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    overflow: "hidden",
    borderRadius: 500,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },

  sC: {
    width: 150,
    height: 150,
    backgroundColor: "white",
    borderWidth: 5
  }
});

export default AppStyle;
