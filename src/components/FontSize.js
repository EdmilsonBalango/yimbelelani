import Slider from "@react-native-community/slider";
import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { DataContext } from "../context";
import { darkTheme, lightTheme } from "../context/Theme";


const { height, width } = Dimensions.get("window")

const FontSize = () => {

    const { DarkMode, FontSizeValue } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode
    const [ Fontsize, setFontSize ] = FontSizeValue


    return(
        <View style={{justifyContent: "center", alignItems: "center"}}>
            <TouchableOpacity style={{marginRight: 10}} onPress={() => setFontSize(Fontsize + 2)} >
                <Text style={{color: isDarkMode ? darkTheme.color : lightTheme.color, fontSize: 24 }}>Aa</Text>
            </TouchableOpacity>
            <Slider 
                style={{width: width * .4, height: 35, position: "absolute", backgroundColor: isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor, borderRadius: 15, paddingHorizontal: 20, justifyContent: "center", alignItems: "center", right: 10}}
                minimumValue={22}
                maximumValue={62}
                step={2}
                onValueChange={(e)=> setFontSize(e)}
                thumbTintColor={isDarkMode ? lightTheme.color : darkTheme.color}
                minimumTrackTintColor={isDarkMode ? lightTheme.color : darkTheme.color}
            />
        </View>
    )
}

export default FontSize