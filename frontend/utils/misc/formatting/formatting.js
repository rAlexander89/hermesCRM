
// adds commas to numbers ex: 1025000 -> 1,025,000
export function addComma(num){
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// changes date from xx/xx/xx to xx.xx.xx
export function offerDate(date){
    return date.replace(/\//g,'.')
}

// changes Rails date-time format to our apps preffered date format ex: 2021-03-14T06:19:02.974Z -> 03.14.21
export function updateDate(date){
    let cutTime = date.split('T')[0]
    let seperateByDash = cutTime.split('-')
    let month = seperateByDash[1]
    let day = seperateByDash[2]
    let year = seperateByDash[0].substring(2)
    return `${month}.${day}.${year}`
}

// truncates offer ratios (O-L, L-A) down to the 100th point ex: 0.2131231231 -> 0.21
export function truncDigits(num){
    return num.substring(0,4)
}

// truncates status to a singletter ex: Active -> A, Pending -> P
export function truncStatus(status){
    let acronym = status.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')
    return acronym
}

// formats phone number from (xxx)-xxx-xxxx -> xxx.xxx.xxxx
export function formatContact(num){
    if (!num) return 'none'
    let number = num.replaceAll(' ','').replaceAll('-','.').replace('(','').replace(')','')
    return number
}

// numerator / denominator turned into a whole number.
export const floatToPerc = (num, den) => {
    if ( den === 0) return null
    return Math.floor(num/den * 100)
}