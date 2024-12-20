import Home from "./src/screens/Home";
import { StatusBar } from "react-native";
import { Fragment } from "react";

export default function App(){
  return(
    <Fragment>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Home />
    </Fragment>    
  );
}