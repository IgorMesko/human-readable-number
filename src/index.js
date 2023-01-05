module.exports = function toReadable (number) {
    let numberString = String(number);
    let digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return digits[number]
    } else if (number >= 20 && number < 100) {
        if (number % 10 === 0) {
            return dozens[numberString[0]]
        } else {
            return dozens[numberString[0]] + ' ' + digits[numberString[1]]
        }
    } else if (number >= 100) {
        let substrString = Number((numberString.slice(1)));

        if (number % 100 === 0) {
            return digits[numberString[0]] + ' hundred'
        } 
        if (number % 10 === 0) {
            return digits[numberString[0]] + ' hundred ' + dozens[numberString[1]]
        } 
        
        else {
            if (substrString < 20) {
                return digits[numberString[0]] + ' hundred ' + digits[substrString]
            } else {
                return  digits[numberString[0]] + ' hundred ' + dozens[numberString[1]] + ' ' + digits[numberString[2]]
            }
        }
    } 
} 

