import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React,{ useState, createContext, useEffect,  } from "react";
import db from "../database/engine";

export const DataContext = createContext()

export const DataProvider =(props) => {

    const [isDarkMode, setDarkMode ] = useState()
    const [fontSize, setFontSize ] = useState(22)
    const [listHymns, setListHymns ] = useState([])

    async function createTables() {
        db.transaction(tx => {
            tx.executeSql('CREATE TABLE IF NOT EXISTS hymns (id INTEGER PRIMARY KEY AUTOINCREMENT, hymnid TEXT, title TEXT, hymn TEXT)',[],(trans, result) =>{
                console.log('sucess creating table: hymns', result)
            },(trans, err) => {
                console.log('error creating table: hymns', err)
            })
        })
    } 

    async function getAllSongs () {    

        await axios.get('https://app.yimbelelani.com/get-all-json').then(response => {
            const allHymns = response.data.hino
            const treathHymns = []

            allHymns.forEach((hymn,index) => {
                let orghym = []
                let text = hymn.texto.split(`\r\n\r\n`)
                orghym.push( ...[{id: hymn.numero, title: hymn.titulo, text}])
                treathHymns.push(...orghym)
            })

            const organized = treathHymns.sort((a, b) => Number(a.id) > Number(b.id) ? 1 : -1)

            organized.forEach(hymn =>{
                db.transaction(tx => {
                    tx.executeSql("INSERT INTO hymns (hymnid, title, hymn) VALUES (?, ?, ?)", [ hymn.id.toString(), hymn.title, JSON.stringify(hymn.text)], (trans, result) => {
                        console.log(result)
                    }, (trans, err) => {
                        console.log(err)
                    })
                })
            })
            // setListHymns(organized)
        }).catch( err => {
            console.log(err)
        })
    }
    const firstLogValidator = async () => {

        const time  = new Date()
        let fullDate = [time.getFullYear(), time.getDay(), time.getMonth()]
        fullDate = fullDate.join().replace(/,/g,"")
        const logKey = '@fstlg' 
        let logToken = logKey + fullDate

        try{
            const response = await AsyncStorage.getItem(logKey)
            if(response === null){
                console.log('no loged')
                createTables()
                getAllSongs()
                await AsyncStorage.setItem(logKey, logToken)
            }else{
                console.log('already logged')
                db.transaction(tx => {
                    tx.executeSql('SELECT * FROM hymns', [], (trans, result) => {
                        const{_array: hymns} = result.rows
                        setListHymns(hymns)
                    }, (trans, error) => {
                        console.log(error)
                    })
                })
            }
        }catch(e){
            console.log(e)
        }

    }

    async function removeTables() {

        db.exec([{sql: 'SELECT * FROM hymns;', args: []}], false, (err ,result)=> {
            console.log(result)
        })        

    }

    async function handleTheme(){
        const theme = await AsyncStorage.getItem('@theme')
        if (theme){
            theme === 'light' ? setDarkMode(false) : setDarkMode(true)
        }else{
            await AsyncStorage.setItem('@theme', 'light')
        }
    }


    useEffect(() => {          
        
        // getAllSongs()
        handleTheme()
        firstLogValidator()
        // removeTables()
    },[])
    
    
    return (
        <DataContext.Provider value={{DarkMode: [isDarkMode, setDarkMode], FontSizeValue: [fontSize, setFontSize], HymnData: [listHymns, setListHymns]}}>
            {props.children}
        </DataContext.Provider>
    )
}