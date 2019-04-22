function getDate(param: number) {
    let today = new Date()
    return new Date((today.setDate(today.getDate()+param))).toLocaleDateString().replace(/\./g, '-')
}

export const today = getDate(0)
export const yesterday = getDate(-1)
export const tommorow = getDate(1) 