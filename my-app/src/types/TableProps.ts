import { TableItem } from "./TableItem"

export interface ITableProps { 
        items: Array<TableItem>, 
        onDateChange(val: string): any
        date: string,
        setTypeOfBoard(val:string):any, 
        typeOfBoard: string, 
        searchVal: string,
        onChangeInputSearchVal(val: any): any, 
        submitSearch(val: string): any
    }