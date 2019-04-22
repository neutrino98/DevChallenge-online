import {TableItem} from "./TableItem"

export interface ITableProps { 
        items: Array<TableItem>, 
        onDateChange(val: string): any
        date: string
    }