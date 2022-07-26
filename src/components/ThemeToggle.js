import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Keyboard } from 'react-native'
import { DataContext } from "../context";
import { MoonIcon, SunIcon } from "./icons";

const ThemeToggle = () => {

    const { DarkMode } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode

    return (
        <TouchableOpacity style={{height: 40, width: 40, justifyContent: "center", alignItems: "center", }} onPress={()=> {setDarkMode(!isDarkMode), Keyboard.dismiss()}}>
            {isDarkMode ? <SunIcon color={'#fff'} /> : <MoonIcon color={'#055160'} />}
        </TouchableOpacity>
    )
}

export default ThemeToggle