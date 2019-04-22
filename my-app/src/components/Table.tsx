import React, { useState, FunctionComponent } from 'react';
import DateChoise from '../components/DateChoise'
import { ITableProps } from '../types/TableProps'

export default function Table(props: ITableProps) {
    const [selectedDate, setSelectedDate] = useState<string>('21/04')
    const [typeOfBoard, setTypeOfBoard] = useState<string>('arrive')
    console.log(selectedDate)

    return (
        <div>
            <div className="container">
                <div className="row table_heading">
                    <div className="col-md-6 table_heading_left" onClick={() => setTypeOfBoard('departure')}>
                        <div className={typeOfBoard}>
                            Вылет
                        </div>
                    </div>
                    <div className="col-md-6 table_heading_right" onClick={() => setTypeOfBoard('arrive')}>
                        <div className={typeOfBoard}>
                            Прилет
                        </div>                        
                    </div>
                </div>
                <DateChoise
                    value={selectedDate}
                    onDateChange={setSelectedDate}
                />
                <div className="row table_body_head">
                    <div className="col-md-2 table_body">Терминал</div>                
                    <div className="col-md-2 table_body">Время</div>                
                    <div className="col-md-2 table_body">Место назначения</div>                
                    <div className="col-md-2 table_body">Статус</div>                
                    <div className="col-md-2 table_body">Авиакомпания</div>                
                    <div className="col-md-2 table_body">Рейс</div>
                </div>
                { props.items.map(item => 
                    <div className="row table_body_row">
                        <div className="col-md-2 table_body_row_item">{item.terminal}</div>
                        <div className="col-md-2 table_body_row_item">{item.time}</div>
                        <div className="col-md-2 table_body_row_item">{item.destination}</div>
                        <div className="col-md-2 table_body_row_item">{item.status}</div>
                        <div className="col-md-2 table_body_row_item">{item.airline}</div>
                        <div className="col-md-2 table_body_row_item">{item.flight}</div>
                    </div>
                ) }
            </div>
        </div>
    )
}