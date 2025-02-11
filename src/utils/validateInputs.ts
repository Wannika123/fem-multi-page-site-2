export function validateInputs(val: string, key: string) {
    switch(key) {
        case 'email': 
            return validateEmail(val)
        case 'dateDay':
        case 'dateMonth':
        case 'timeHour':
        case 'timeMin':
            return validateDayMonthHourMin(val);
        case 'dateYear':
            return validateYear(val); 
        default:
            return val !== '' ? true : false;   // only check if it's an empty string
    }
}

function validateEmail(val: string) {
    if (/^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/.test(val)) {
        return true
    }
    return false
}

function validateDayMonthHourMin(val: string) {
    if (/^\d\d$/.test(val)) {
        return true
    }
    return false
}

function validateYear(val: string) {
    if (/^\d\d\d\d$/.test(val)) {
        return true
    }
    return false
}