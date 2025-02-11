import { KeyNames } from "@/components/booking/Form";

export function maskInputs(val: string, key: KeyNames) {
    switch(key) {
        case 'dateMonth':
        case 'timeHour':
            return maskMonthAndHour(val);
        case 'dateDay':
            return maskDay(val);
        case 'dateYear':
            return maskYear(val);
        case 'timeMin':
            return maskMin(val);       
        default: 
            return val;
    }
}

function maskMonthAndHour(val: string) {
    const regex = new RegExp(`^[01]${val[0] === '0' ? '[1-9]' : '[0-2]'}?`);
    const matched = val.match(regex);

    return matched ? matched[0] : ''
}

function maskDay(val: string) {
    const secondCharGroup = val[0] === '0'
        ? '[1-9]'
        : val[0] === '3'
            ? '[01]'
            : '\\d'

    const regex = new RegExp(`^[0-3]${secondCharGroup}?`);
    const matched = val.match(regex)

    return matched ? matched[0] : ''
}

function maskMin(val: string) {
    const matched = val.match(/^[0-5]\d?/)

    return matched ? matched[0] : ''
}

function maskYear(val: string) {
    const regex = new RegExp(`^2(0([2-9](${ val.length >= 2 && val[2] === '2' ? '[5-9]' : '\\d'})?)?)?`);
    const matched = val.match(regex);

    return matched ? matched[0] : ''
}