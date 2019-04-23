export function prettyTime(time: string):string {
    let newTime = new Date(time)
    let minutes = newTime.getMinutes() + ''
    let prettyMinutes = (minutes === '0') ? minutes + '0' : minutes
    let hours = newTime.getHours()
    return hours + ":" + prettyMinutes 
  }