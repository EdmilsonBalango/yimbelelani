import axios from "axios";
import React,{ useState, createContext, useEffect,  } from "react";

export const DataContext = createContext()

export const DataProvider =(props) => {

    const [isDarkMode, setDarkMode ] = useState(false)
    const [fontSize, setFontSize ] = useState(22)
    const [listHymns, setListHymns ] = useState([])

    async function getAllSongs () {
        
        await axios.get('https://app.yimbelelani.com/get-all-json').then(response => {
            const allHymns = response.data.hino
            const treathHymns = []
            let numPosition = 1

            allHymns.forEach((hymn,index) => {
                let orghym = []
                let text = hymn.texto.split(`\r\n\r\n`)
                // text = text && text.replace(/br>/g, ' ') 
                let position = Number(hymn.numero)

                orghym.push( ...[{id: hymn.numero, title: hymn.titulo, text}])
                treathHymns.push(...orghym)

                // console.log('not elegible', hymn.numero)
                
            })

            const organized = treathHymns.sort((a, b) => Number(a.id) > Number(b.id) ? 1 : -1)
            setListHymns(organized)
            // console.log('org', organized)

        }).catch( err => {
            console.log(err)
        })
        
    }

    useEffect(() => {
                
        getAllSongs()

    },[])
    
    
    return (
        <DataContext.Provider value={{DarkMode: [isDarkMode, setDarkMode], FontSizeValue: [fontSize, setFontSize], HymnData: [listHymns, setListHymns]}}>
            {props.children}
        </DataContext.Provider>
    )
}