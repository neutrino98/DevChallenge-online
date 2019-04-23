import React from 'react'
import { ISearchBar } from '../types/SearchBar'

export default function SearchBar(props: ISearchBar) {
    return(
        <div className="row table_search_bar">
            <div className="col-md-7">
                <input 
                    value={props.value} 
                    onChange={(e) => props.setSearchValue(e.target.value)} 
                    placeholder="Город или номер рейса"
                    className="table_search_bar_input"
                />
            </div>     
            <div className="col-md-4" onClick={() => props.submitSearch(props.value)}>
                <div className="table_search_bar_submit">Знайти</div> 
            </div>      
        </div>
    )
} 