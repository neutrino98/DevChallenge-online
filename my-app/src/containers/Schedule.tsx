import React, { useState, useEffect } from 'react';
import Table from '../components/Table'
import { TableItemListStub } from '../Stub'
import { today } from '../helpers/Date'
import { TableItem } from '../types/TableItem'

export default function Schedule() {
    const [selectedDate, setSelectedDate] = useState<string>(today)
    
    const useFetch = (url: string) => {
        const [data, setData] = useState(null);
        useEffect(() => {
          (async () => {
            const res = await fetch(url);
            const data = await res.json();
            setData(data);
          })();
        }, [url]);
        return data;
      }

    const tableItems: Array<TableItem> = useFetch(`https://api.iev.aero/api/ﬂights/${selectedDate}`)

    return(
        <Table 
            items={TableItemListStub}
            date={selectedDate}
            onDateChange={setSelectedDate}
        />
    )
}