import { View,Text,TextInput,StyleSheet } from "react-native";
import SQLite from "react-native-sqlite-storage";
import FlatButton from "../ui/FlatButton";

/*
const db = SQLite.openDatabase(
    {
        name: "MainDB",
        location: "default"
    },
    ()=> {},
    error=>{console.log(error)}
);

const createTable = () =>{
    db.transaction((tx)=>{
        tx.executeSql(
            "Create TABLE IF NOT EXISITS "
            +"Users "
            +"(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name Text);"
        )

    };
};
*/

const Login = ({ navigation }) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.welcome}>Login</Text>
      <TextInput placeholder="Username" style={styles.input}/>
      <TextInput placeholder="Password" style = {styles.input}/>
      <FlatButton title = {"Login"}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "pink",
    
  },
  welcome:{
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "#fdfd96",
    fontFamily: "Cochin",


  },
  input: {
    width: "90%",
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,

  }

});
export default Login;
