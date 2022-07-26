import React, { useContext } from 'react'
import {View, Text, Dimensions, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import HymnListComponent from '../components/hymnList'
import { DataContext } from '../context'
import { darkTheme, lightTheme } from '../context/Theme'
import Ionicons from 'react-native-vector-icons/Ionicons'
import data from '../data'
import { SearchIcon } from '../components/icons'

const { height, width } = Dimensions.get('window')

const Favorite = ({navigation}) => {
    const { DarkMode, FontSizeValue } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode

    return (
        <View style={{height, width}}>
            <View style={{height: 60, backgroundColor: isDarkMode ? darkTheme.darkBackgroundColor : lightTheme.lightBackgroundColor, alignItems: "center", justifyContent: "space-between",flexDirection: "row",paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={{height: 40, width:40, justifyContent: 'center', }}>
                    <Ionicons name="chevron-back-outline" color={isDarkMode ? darkTheme.color : lightTheme.color} size={30} />
                </TouchableOpacity>

                <Text style={{fontWeight: "bold", color: '#fff'}}>Hinos Favoritos</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')} style={{height: 40, width: 40, justifyContent: 'center', alignItems: 'center'}}>
                    <SearchIcon color={isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor}/>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item}) => <HymnListComponent data={item} navigation={navigation} />}
                style={{backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor}}

            />
        </View>
    )
}

export default Favorite;