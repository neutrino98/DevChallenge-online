import React, { useState, useEffect } from 'react';
import Table from '../components/Table'
import { TableItemListStub } from '../Stub'
import { today } from '../helpers/Date'
import { TableItem } from '../types/TableItem'
import { useFetch } from '../helpers/useFetch'


function decodeTableItem(row: any): TableItem {
  let time =  new Date(row.timeToStand)
  let minutes = time.getMinutes()
  let viewMinutes = (minutes === 0) ? minutes + '0' : minutes  
  
  return {
    terminal: row.term,
    time: time.getHours() + ":" + viewMinutes,
    destination: row["airportFromID.city_en"],
    status: row.status, 
    airline: "WizAir",//row.airline,//["en.name"],
    flight: row.planeNo
  }
}

function filteringBoards(searchVal: string, items: Array<TableItem>): Array<TableItem> {
  if(searchVal === "") return items
  if(items.length === 0) return items
  
  return items.filter(item => {
    if(!item.flight || !item.destination) return false
    return item.flight.toLowerCase().includes(searchVal.toLowerCase()) || item.destination.toLowerCase().includes(searchVal.toLowerCase())
  })
}

export default function Schedule() {
    const [selectedDate, setSelectedDate] = useState<string>(today)
    const [typeOfBoard, setTypeOfBoard] = useState<string>('arrive')
    const [searchVal, setSearchVal] = useState<string>('')
    const [inputSearchVal, onChangeInputSearchVal] = useState<string>('')

   

    const tableItems: any = useFetch(`https://api.iev.aero/api/flights/${selectedDate}`)
    const arrivalBoards: Array<TableItem> = tableItems ? tableItems.body.arrival.map((row: any) => decodeTableItem(row)) : []
    const departureBoards: Array<TableItem> = tableItems ? tableItems.body.departure.map((row: any) => decodeTableItem(row)) : []
    

    function getTableItemsByTypeOfBoard():Array<TableItem> {
      if (typeOfBoard === 'arrive') return arrivalBoards
      if (typeOfBoard === 'departure') return departureBoards
      return []
    }    
    
    return(
        <Table 
            items={filteringBoards(searchVal, getTableItemsByTypeOfBoard())}
            typeOfBoard={typeOfBoard}
            setTypeOfBoard={setTypeOfBoard}
            date={selectedDate}
            onDateChange={setSelectedDate}
            searchVal={inputSearchVal}
            onChangeInputSearchVal={onChangeInputSearchVal}
            submitSearch={setSearchVal}            
        />
    )
}