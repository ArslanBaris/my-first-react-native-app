import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>./arslan</Text>
        <Image source={require("./assets/menu.png")} style={styles.menu} />
      </View>
      <View style={styles.content}>
        <Text style={styles.button}>
          <Text onPress={()=>{console.log("Clicked !!")}} style={{flex:1,alignItems:"center", }}> Click Me</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"red",
    flex:1
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
    width:25,
    height:25

  },
  content:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
    },
    button:{
      width:100,
      height:40,
      lineHeight:40,
      backgroundColor:"darkorange",
      textAlign:"center",
      
    }
});
