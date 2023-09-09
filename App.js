import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity } from 'react-native';

export default function App() {
  const [visible,setVisible] = useState(true);

  const toggleView = () => {
    setVisible(!visible);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>./arslan</Text>
        <Image source={require("./assets/menu.png")} style={styles.menu} />
      </View>
      <View style={styles.content}>
        <Text style={styles.button}>
          <Text onPress={() => { console.log("Clicked !!") }} style={{ flex: 1, alignItems: "center", }}> Click Me</Text>
        </Text>
      </View>
      <View style={styles.secondContainer}>
        <TouchableWithoutFeedback
          onPress={(e) => console.log("Clicked second button!")}
          onPressIn={(e) => console.log("Pressed In!")}
          onPressOut={(e) => console.log("Pressed Out!")}
          hitSlop={{ top: 50, bottom: 50, left: 50, right: 50 }}
          pressRetentionOffset={{ bottom: 100 }}
          delayPressIn={3000}
          delayLongPress={5000}
          onLongPress={(e) => console.log("Long Pressed!")}
        >
          <View style={styles.secondButton}>
            <Text style={{ color: "#fff" }}>Click Me</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.thirdContainer}>
        <TouchableHighlight
        activeOpacity={0.8}
        underlayColor={"brown"}
          onPress={(e) => console.log("Touchable Highlight!")}
        onShowUnderlay={(e) => console.log("onShowUnderlay!")}
        onHideUnderlay={(e) => console.log("onHideUnderlay!")}
        >
          <View style={styles.secondButton}>
            <Text style={{ color: "#fff" }}>Click Me</Text>
          </View>
        </TouchableHighlight>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity
          onPress={toggleView}
        >
          <View style={styles.secondButton}>
            <Text style={{ color: "#fff" }}>Show / Hide</Text>
          </View>
        </TouchableOpacity>
        <View style={{display:visible ? "none" : "flex"}}>
          <Text style={{ color: "black" }}>Test Message</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1
  },
  secondContainer: {
    backgroundColor: "grey",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  thirdContainer: {
    backgroundColor: "yellow",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fourthContainer:{
    backgroundColor: "blue",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  secondButton: {
    backgroundColor: "orange",
    height: 50,
    width: 200,
    justifyContent: "center",
    alignItems: "center",

  },
  header: {
    height: 80,
    backgroundColor: "orange",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,

  },
  logo: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  menu: {
    width: 25,
    height: 25

  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 100,
    height: 40,
    lineHeight: 40,
    backgroundColor: "darkorange",
    textAlign: "center",

  }
});
