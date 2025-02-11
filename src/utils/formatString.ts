export function toCamelCase(val: string) {
    const result = [];
    const array = val.split('-');

    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            result.push(array[i])
        } else {
            const chars = array[i].split('');
            chars[0] = chars[0].toUpperCase();
            result.push(chars.join(''))
        }       
    }
    return result.join('')
}