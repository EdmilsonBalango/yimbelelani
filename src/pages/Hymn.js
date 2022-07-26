import { StatusBar } from "expo-status-bar";
import React, { useContext, useState } from "react";
import { View, Text, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontSize from "../components/FontSize";
import { MoonIcon } from "../components/icons";
import ThemeToggle from "../components/ThemeToggle";
import { DataContext } from "../context";
import { darkTheme, lightTheme } from "../context/Theme";



const { height, width } = Dimensions.get('window')


const Hymn = ({route, navigation}) => {
    const { DarkMode, FontSizeValue } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode
    const [ fontSize, setFontSize] = FontSizeValue

    const { hymn } = route.params

    const styles = {
        shadow:{
            shadowColor: '#000', 
            shadowOffset: {width:0,height: 1},
            shadowOpacity: .2,
            shadowRadius: 3,
            elevation: 2, 
        },
        lyrics: {
            textAlign: "center", 
            marginBottom: 20, 
            fontSize, 
            width: width *.95,
            color: isDarkMode ? darkTheme.color : lightTheme.color
        },
        chorus: {
            textAlign: "center", 
            fontSize, 
            color: isDarkMode ? darkTheme.color : lightTheme.color,
            fontWeight: "bold", 
            width: width *.95
        }
    }

    
    return (
        <View style={{height, width}}>
            <StatusBar  style="dark"/>
            <View style={{...styles.shadow, height: 60, backgroundColor: isDarkMode ? darkTheme.darkBackgroundColor : lightTheme.lightBackgroundColor , paddingHorizontal: 20, alignItems: "center", justifyContent: "space-between",flexDirection: "row"}}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <Ionicons name="chevron-back-outline" color={isDarkMode ? darkTheme.color : lightTheme.color} size={30} />
                </TouchableOpacity>
                <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                    <FontSize />
                    <ThemeToggle />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor}} contentContainerStyle={{justifyContent: 'center',alignItems: "center", paddingHorizontal: 10, paddingVertical: 50, backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor }}>
                <Text style={{fontSize: 26, fontWeight: "bold", color: isDarkMode ? darkTheme.color : lightTheme.color, textAlign: "center"}}>{hymn.id} - {hymn.title}</Text>
                <View style={{marginTop: height * .1}}>
                    <Text style={styles.lyrics} >{hymn.text[0].replace(/br>/g, "" )}</Text>
                    {/* {hymn.chorus !== '' && 
                        <View style={{marginVertical: 50}}>
                            <Text style={{...styles.chorus, marginBottom: 30}} >Wuyelelo:</Text>
                            <Text style={styles.chorus} >{hymn.chorus}</Text>
                        </View>
                    } */}
                    {hymn.text[1] && <Text style={styles.lyrics} >{hymn.text[1].replace(/br>/g, "" )}</Text>}
                    {hymn.text[2] && <Text style={styles.lyrics} >{hymn.text[2].replace(/br>/g, "" )}</Text>}
                    {hymn.text[3] && <Text style={styles.lyrics} >{hymn.text[3].replace(/br>/g, "" )}</Text>}
                </View>
            </ScrollView>
        </View>
    )
}

export default Hymn