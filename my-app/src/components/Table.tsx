import React, { useState, FunctionComponent } from 'react';
import DateChoise from '../components/DateChoise'
import SearchBar from '../components/SearchBar'
import { ITableProps } from '../types/TableProps'

export default function Table(props: ITableProps) {

    return (
        <div>
            <div className="container">
                <div className="row table_heading">
                    <div className="col-md-6 table_heading_left" onClick={() => props.setTypeOfBoard('departure')}>
                        <div className={props.typeOfBoard}>
                            Вылет
                        </div>
                    </div>
                    <div className="col-md-6 table_heading_right" onClick={() => props.setTypeOfBoard('arrive')}>
                        <div className={props.typeOfBoard}>
                            Прилет
                        </div>                        
                    </div>
                </div>
                <SearchBar value={props.searchVal} setSearchValue={props.onChangeInputSearchVal} submitSearch={props.submitSearch}/>
                <DateChoise
                    value={props.date}
                    onDateChange={props.onDateChange}
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