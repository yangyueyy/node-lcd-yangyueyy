var nums = require('./splitNumber.js');


function buildLcdNumber() {
    var allLcds = describeLcd();
    var numbers = nums.splitNumber();
    var lcdNumbers = [];

    numbers.forEach(function (number) {
        var lcdNumber = getExistLcd(allLcds, number);
        lcdNumbers.push(lcdNumber);
    });

    return lcdNumbers;
}

function getExistLcd(allLcds, number) {
    var existLcd;

    allLcds.forEach(function (allLcd) {
        if (allLcd.number == number)
            existLcd = allLcd;
    });

    return existLcd;
}

function describeLcd() {
    return [
        {
            number: 0,
            type: ['._.',
                '|.|',
                '|_|']
        },
        {
            number: 1,
            type: ['...',
                '..|',
                '..|']
        },
        {
            number: 2,
            type: ['._.',
                '._|',
                '|_.']
        },
        {
            number: 3,
            type: ['._.',
                '._|',
                '._|']
        },
        {
            number: 4,
            type: ['...',
                '|_|',
                '..|']
        },
        {
            number: 5,
            type: ['._.',
                '|_.',
                '._|']
        },
        {
            number: 6,
            type: ['._.',
                '|_.',
                '|_|']
        },
        {
            number: 7,
            type: ['._.',
                '..|',
                '..|']
        },
        {
            number: 8,
            type: ['._.',
                '|_|',
                '|_|']
        },
        {
            number: 9,
            type: ['._.',
                '|_|',
                '..|']
        }
    ];
}

exports.buildLcdNumber = buildLcdNumber;
