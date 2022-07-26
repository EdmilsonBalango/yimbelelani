import { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { DataContext } from '../context'
import { darkTheme, lightTheme } from '../context/Theme'

const HymnListComponent = ({data, navigation}) => {
    const { DarkMode } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode
    return (
        <TouchableOpacity style={{paddingHorizontal: 10}} onPress={()=> navigation.navigate("Hymn", {hymn: data}) }>
            <View style={{height: 50, justifyContent: 'center', paddingHorizontal: 15, borderBottomWidth: 1, borderBottomColor: isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor,}}>
                <Text style={{fontWeight: '500', color: isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor}}>{data.id} - {data.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default HymnListComponent