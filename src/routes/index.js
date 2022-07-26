import { createDrawerNavigator } from "@react-navigation/drawer";
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from "@react-navigation/stack";
import react from "react";
import {View, Text, SafeAreaView, StatusBar} from 'react-native'
import DrawerContainer from "../components/DrawerContainer";
import { HymnListIcon, HomeIcon, HomeOutline, HymnListOutlineIcon, StarIcon } from "../components/icons";
import Search from "../pages/Search";
import IonicIcons from 'react-native-vector-icons/Ionicons'
import HymnList from "../pages/HymnsList";
import Favorite from "../pages/Favorite";
import Hymn from "../pages/Hymn";

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator 
                    screenOptions={{headerShown: false, drawerActiveBackgroundColor: 'rgba(5,81,96,.2)', drawerActiveTintColor: 'rgba(5,81,96,1)', drawerInactiveTintColor: 'rgba(5,81,96,1)' }}
                    initialRouteName="Home"
                    drawerContent={props => <DrawerContainer {...props}/>}
                    
                >
                    <Drawer.Screen 
                        name="Home" 
                        component={Search}
                        options={{
                            drawerIcon: ({focused, color, size}) => {
                                if (focused) {
                                    return <HomeIcon color={'#055160'} />
                                } return <HomeOutline color={'#055160'} />
                            },
                            

                        }} 

                    
                    />
                    <Drawer.Screen 
                        name="List" 
                        component={HymnList}
                        options={{
                            drawerIcon: ({focused, color, size}) => {
                                if (focused) {
                                    return  <HymnListOutlineIcon color={'#055160'} />
                                } return <HymnListIcon color={'#055160'} />
                            }
                        }} 
                    
                    />
                    <Drawer.Screen 
                        name="Favorite" 
                        component={Favorite}
                        options={{
                            drawerIcon: ({focused, color, size}) => {
                                if (focused) {
                                    return <StarIcon fillColor={'#055160'} strokeColor={'#055160'}  />
                                } return <StarIcon fillColor={'none'} strokeColor={'#055160'}  />
                            }
                        }} 
                    
                    />
                </Drawer.Navigator>
    )
}


const Routes =() => {
    return(
        <NavigationContainer>
                <SafeAreaView style={{flex:1}}>
                    <Stack.Navigator screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Drawer" component={DrawerNavigator} />
                        <Stack.Screen name="Hymn" component={Hymn} />
                    </Stack.Navigator>
                </SafeAreaView>
            </NavigationContainer>
    )
}

export default Routes;