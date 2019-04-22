function getDate(param: number):string {
    let today = new Date()
    return new Date((today.setDate(today.getDate()+param))).toLocaleDateString().replace(/\./g, '-')
}

export const today:string = getDate(0)
export const yesterday:string = getDate(-1)
export const tommorow:string = getDate(1) 