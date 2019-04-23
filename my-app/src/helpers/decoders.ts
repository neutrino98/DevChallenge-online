import { prettyTime } from '../helpers/Time'
import { TableItem } from '../types/TableItem'

const decodeTableItem = (typeOfBoard: string) => (row: any): TableItem =>  {
    let destination = ''
    if (typeOfBoard === 'arrival') {
        destination = 'airportFromID.city_en'
    } else destination = 'airportToID.city_en'
    const airline = row.airline ? row.airline.en.name : ""

    return {
        terminal: row.term,
        time: prettyTime(row.timeToStand),
        destination: row[destination],
        status: row.status, 
        airline: airline,
        flight: row.planeNo
      }
 }

export const decodeTableArrivalItem = decodeTableItem('arrival')
export const decodeTableDepartureItem = decodeTableItem('departure')