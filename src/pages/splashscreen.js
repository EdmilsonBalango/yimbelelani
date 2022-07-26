import react from "react";
import {View, Text, StatusBar, Dimensions, Image} from 'react-native'


const { height, width } = Dimensions.get("window")
const SplashScreen = () => {
    return(
        <View style={{ height, width, justifyContent: "center", alignItems: "center", backgroundColor: '#055160'}}>
            <StatusBar hidden={true}/>
            <Image source={require('../../../assets/logo.png')}  />
            <Text style={{color: '#fff', fontWeight: "bold", fontSize: 32, textAlign: "center", width: width *.5}}>Yimbelelani Ka Jehova</Text>
        </View>
    )
}

export default SplashScreen