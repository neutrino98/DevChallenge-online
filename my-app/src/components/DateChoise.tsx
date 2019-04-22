import React from 'react'
import { IDateChoiseProps } from '../types/DateChoise'

export default function DateChoise({value, onDateChange}: IDateChoiseProps) {
    return (
        <div className="row table_date_choise">
            <div className="col-md-2">
                Вчера
            </div>
            <div className="col-md-2">
                Сегодня
            </div>
            <div className="col-md-2">
                Завтра
            </div>
        </div>
    )
}