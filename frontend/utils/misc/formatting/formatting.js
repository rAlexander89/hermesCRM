
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
    if (typeof num === 'number'){
        num = num.toString()
    }
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
    if ( den === 0 && num === 0) return null
    return Math.floor(num/(den + num) * 100).toString()
}

// numerator / denominator turned into a whole number.
export const floatToPercTotal = (num, den) => {
    if ( den === 0 && num === 0) return null
    return Math.floor(num/den * 100).toString()
}

// turns a num into a word -- code from: https://www.onlinecode.org/convert-number-words-javascript/
export function numToWord(num){
    let s = num;
    // System for American Numbering 
    var th_val = ['', 'thousand', 'million', 'billion', 'trillion'];
    // System for uncomment this line for Number of English 
    // var th_val = ['','thousand','million', 'milliard','billion'];
    
    var dg_val = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tn_val = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tw_val = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s))
        return 'not a number ';
    var x_val = s.indexOf('.');
    if (x_val == -1)
        x_val = s.length;
    if (x_val > 15)
        return 'too big';
    var n_val = s.split('');
    var str_val = '';
    var sk_val = 0;

    for (var i = 0; i < x_val; i++) {
        if ((x_val - i) % 3 == 2) {
            if (n_val[i] == '1') {
                str_val += tn_val[Number(n_val[i + 1])] + ' ';
                i++;
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += tw_val[n_val[i] - 2] + ' ';
                sk_val = 1;
            }
        } else if (n_val[i] != 0) {
            str_val += dg_val[n_val[i]] + ' ';
            if ((x_val - i) % 3 == 0)
                str_val += 'hundred ';
            sk_val = 1;
        }
        if ((x_val - i) % 3 == 1) {
            if (sk_val)
                str_val += th_val[(x_val - i - 1) / 3] + ' ';
            sk_val = 0;
        }
    }

    if (x_val != s.length) {
        var y_val = s.length;
        str_val += 'point ';
        for (var i = x_val + 1; i < y_val; i++)
            str_val += dg_val[n_val[i]] + ' ';
    }

    return str_val.replace(/\s+/g, ' ');
}


// Figures the date 
export function getOfferDate(type){

    let date = new Date
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    let truncMonth = [
        'Jan', 'Feb', 'Mrc', 'Apr',
        'May', 'Jun', 'Jly', 'Aug',
        'Sep', 'Oct', 'Nov', 'Dec'
    ]

    switch(type){
        case 'dash':
            month.toString()
            day.toString()
            month += 1
            month = month.length > 1 ? month : '0' + month
            day = day.length > 1 ? day : '0' + day
            let dateDash = month + '/' + day + '/' + year
            return dateDash
        default:
            let truncDate = truncMonth[month].toString() + ' ' + day.toString() + ' ' + year.toString()
            return truncDate
    }
}

export function formAddress(houseNumber, stPrefix, stName, stSuffix,){
    let address;
    if (stPrefix.length > 0 && stSuffix.length > 0) {
        address = houseNumber + ' ' + stPrefix + ' ' + stName + ' ' + stSuffix
    } else if ( stPrefix.length === 0 && stSuffix.length > 0 ){
        address = houseNumber + ' ' + ' ' + stName + ' ' + stSuffix
    } else if ( stPrefix.length === 0 && stSuffix.length === 0 ){
        address = houseNumber + ' ' + stName
    }
    return address.toString()
}

// take the form data from the individual lead maker and writes it in a way that is friendly to our backend.
export function prepNewLead(formData){


    const newLead = {
        // agent_hash: {
            firstname: formData['agent_first'].value,
            lastname: formData['agent_last'].value,
            cell: formData['agent_contact'].value,
            email: formData['agent_email'].value,
            agentid: formData['agent_id'].value,
            officename: formData['agent_broker_name'].value,
            officeid: formData['agent_broker_id'].value,

        // },
        // pipeline_hash: {
            status: formData['status'].value,
        // },
        // property_hash: {
            address: formAddress(formData['house_number'].value, formData['st_prefix'].value, formData['street_name'].value, formData['st_suffix'].value ),//
            city: formData['city'].value,//
            zip: formData['zipcode'].value.toString(), //
            housenumber: formData['house_number'].value, //
            street_prefix: formData['st_prefix'].value,//
            street_name: formData['street_name'].value,//
            street_suffix: formData['st_suffix'].value,//
            county: formData['county'].value,//
            state: formData['state'].value,//
            apn: formData['apn'].value,//
            ao: truncDigits(parseInt(formData['offer'].value) / parseInt(formData['arv'].value)),//
            la: truncDigits(parseInt(formData['list_price'].value) / parseInt(formData['arv'].value)),//
            listprice: formData['list_price'].value,
            lo: truncDigits(parseInt(formData['offer'].value) / parseInt(formData['list_price'].value)),//
            date: getOfferDate('dash'),
            datetext: getOfferDate(),
            offertext: numToWord(formData['offer'].value),
            offer: formData['offer'].value.toString(),//
            arv: formData['arv'].value.toString(),//
            bac: formData['bac'].value.toString(),//
            bed: formData['bed_count'].value,//
            bath: formData['bath_count'].value,//
            lot_area: formData['gla'].value,//
            gla: formData['gla'].value,//
            listing_id: formData['listing_id'].value.toString(), //
    }

    return newLead

}

