import react, { useContext } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import HymnListComponent from "../components/hymnList";
import { MenuBares, SearchIcon } from "../components/icons";
import { DataContext } from "../context";
import { darkTheme, lightTheme } from "../context/Theme";
import data from "../data";

const HymnList = ({navigation}) => {

    const { DarkMode, HymnData } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode
    const [ listHymns, setListHymns ] = HymnData

    const styles = {
        shadow:{
            shadowColor: '#000', 
            shadowOffset: {width:0,height: 1},
            shadowOpacity: .2,
            shadowRadius: 3,
            elevation: 2, 
        }
    }

    // console.log('Lista', listHymns)

    
    return (
        <View >
            <View style={{...styles.shadow, height: 60, backgroundColor: isDarkMode ? darkTheme.darkBackgroundColor : lightTheme.lightBackgroundColor, paddingHorizontal: 10, justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
                <TouchableOpacity onPress={()=> navigation.openDrawer()}>
                    <MenuBares color={isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor} />
                </TouchableOpacity>
                <Text style={{fontWeight: "bold", color: '#fff'}}>Lista de Hinos</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
                    <SearchIcon color={isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor}/>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={listHymns}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <HymnListComponent data={item} navigation={navigation} />}
                style={{backgroundColor: isDarkMode ? darkTheme.backgroundColor : lightTheme.backgroundColor}}
                
            />
        </View>
    )
}

export default HymnList