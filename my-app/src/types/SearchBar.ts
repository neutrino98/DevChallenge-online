export interface ISearchBar {
    value: string, 
    submitSearch(val: string): any,
    setSearchValue(val: string): any,
}