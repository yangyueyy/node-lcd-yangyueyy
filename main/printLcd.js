var lcdNum = require('./buildLcdNumer.js');

function printLcd() {
    var numberText = '';
    var numberArrays = [];
    var lcdNumbers = lcdNum.buildLcdNumber();
    var i = 0, j = 0;

    for (i = 0; i < lcdNumbers[0].type.length; i++) {
        var numberi = '';
        for (j = 0; j < lcdNumbers.length; j++) {
            numberi += lcdNumbers[j].type[i] + ' ';
        }

        numberArrays.push(numberi);
    }

    numberArrays.forEach(function (numberArray) {
        numberText += numberArray + '\n';
    });

    return numberText;
}

exports.printLcd = printLcd;