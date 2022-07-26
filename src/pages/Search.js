import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, TextInput, ScrollView, KeyboardAvoidingView, Platform, SafeAreaView, Keyboard} from 'react-native'
import { MenuBares } from '../components/icons';
import ThemeToggle from '../components/ThemeToggle';
import { DataContext } from '../context';
import { darkTheme, lightTheme } from '../context/Theme';
import data from '../data';


const { height, width } = Dimensions.get('window')
const Search = ({navigation}) => {

    const { DarkMode, HymnData } = useContext(DataContext)
    const [ isDarkMode, setDarkMode ] = DarkMode
    const [ listHymns, setListHymns ] = HymnData
    const [ hymnToOpen, setHymnToOpen ] = useState(1)

    function searchHymn() {
        const isNumValidadet = isNaN(hymnToOpen)
        if (!isNumValidadet && hymnToOpen > 0 && hymnToOpen < 193){
            navigation.navigate('Hymn', {hymn: listHymns[hymnToOpen - 1]})
            // console.log(listHymns[191])
            return
        }
        return alert('número inválido')
        
    }
    return (
        <View style={{height, width, backgroundColor: isDarkMode ? lightTheme.color : darkTheme.color}}>
            <StatusBar style={'dark'} />
            <View style={{padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <TouchableOpacity onPress={()=> {navigation.openDrawer(), Keyboard.dismiss()}}>
                    <MenuBares  color={isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor} />
                </TouchableOpacity>
                    <ThemeToggle />
            </View>
            <KeyboardAvoidingView  enabled behavior={Platform.OS === 'ios' ? 'padding': null} style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ScrollView scrollEnabled={false} contentContainerStyle={{flex:1,  justifyContent: 'center', alignItems: 'center'}} style={{flex: 1,}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: 'https://yimbelelani.com/assets/harpa.png', width: 100}} style={{height:150}}  />
                        <Text style={{color: isDarkMode ? lightTheme.backgroundColor : darkTheme.backgroundColor, fontWeight: 'bold', fontSize: 26}}>Yimbelelani Ka Jehova</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 50}}>
                        <View style={{height: 50, width: width * .8, backgroundColor: '#ddd', paddingHorizontal: 10, borderRadius: 10}}>
                            <TextInput onChangeText={text => setHymnToOpen(Number(text))} keyboardAppearance={isDarkMode ? 'dark' : 'default'} keyboardType='number-pad' maxLength={3} style={{flex: 1, fontSize: 18, fontWeight:'500', textAlign: 'center', color: '#555'}} placeholder='Digite o número do hino' />
                        </View>
                        <TouchableOpacity onPress={()=> searchHymn()} style={{backgroundColor: isDarkMode ? darkTheme.darkBackgroundColor : darkTheme.backgroundColor, height: 50, borderRadius: 10, width: width * .5, justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#fff'}}>Pesquisar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
            
        </View>
    )
}


export default Search;