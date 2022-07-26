import { DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import React from "react";
import { View, Text, Dimensions, Image } from 'react-native'




const { height, width } = Dimensions.get("window")
const DrawerContainer = ({...props}) => {
    return (
        <View style={{flex: 1}}>
            <View style={{backgroundColor: '#055160', height: height * .35, justifyContent: "center", alignItems: "center"}}>
                <Image source={{uri: 'https://yimbelelani.com/assets/harpa.png', width: 100}} style={{height:130}}  />
                <Text style={{color: '#fff', fontWeight: "800", fontSize: 24, width: width * .6, textAlign: "center"}}>Yimbelelani Ka Jehova</Text>
            </View>
            <View style={{ flex: 1, justifyContent: "center", }}>
                <DrawerItemList {... props} labelStyle={{fontWeight: '900'}}  />
            </View>
        </View>
    )
}

export default DrawerContainer