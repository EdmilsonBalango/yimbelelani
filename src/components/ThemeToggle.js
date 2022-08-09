import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import { DataContext } from "../context";
import { MoonIcon, SunIcon } from "./icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ThemeToggle = () => {

    const { DarkMode } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode

    async function setTheme(){
        Keyboard.dismiss()
        if(!isDarkMode){
            await AsyncStorage.setItem('@theme', 'dark').then(sucess => {
                setDarkMode(true)
                console.log(sucess)
            }).catch(error => {
                console.log('error setting theme', error)
            })
        }else{
            await AsyncStorage.setItem('@theme', 'light').then(sucess => {
                setDarkMode(false)
                console.log(sucess)
            }).catch(error => {
                console.log('error setting theme', error)
            })
            
        }
    }

    return (
        <TouchableOpacity style={{height: 40, width: 40, justifyContent: "center", alignItems: "center", }} onPress={()=> setTheme()}>
            {isDarkMode ? <SunIcon color={'#fff'} /> : <MoonIcon color={'#055160'} />}
        </TouchableOpacity>
    )
}

export default ThemeToggle