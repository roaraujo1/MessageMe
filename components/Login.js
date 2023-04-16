import { View } from "react-native";
import SQLite from "react-native-sqlite-storage";
import CustomInput from "../ui/CustomInput";
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
    <View>
      <CustomInput placeholder={"Username"}  />
      <CustomInput placeholder={"Password"} />
    </View>
  );
};
export default Login;
