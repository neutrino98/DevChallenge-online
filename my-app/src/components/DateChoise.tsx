import React from 'react'
import { IDateChoiseProps } from '../types/DateChoise'
import { yesterday, today, tommorow } from '../helpers/Date'

export default function DateChoise({value, onDateChange}: IDateChoiseProps) {
    return (
        <div className="row table_date_choise">
            <div className={"col-md-2 " + (value === yesterday ? "selected": "")} onClick={() => onDateChange(yesterday)}>
                Вчера
            </div>
            <div className={"col-md-2 " + (value === today ? "selected": "")} onClick={() => onDateChange(today)}>
                Сегодня
            </div>
            <div className={"col-md-2 " + (value === tommorow ? "selected" : "")} onClick={() => onDateChange(tommorow)}>
                Завтра
            </div>
        </div>
    )
}