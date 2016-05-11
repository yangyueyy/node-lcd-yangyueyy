var  printLcd=require('./../main/printLcd.js');

describe('Lcd-digits', function () {


    beforeEach(function () {

    });

    it('should print correct LCD', function () {

       printLcd.printLcd();

        var expectText =
            '._. ... ._. \n' +
            '|_| ..| |.| \n' +
            '..| ..| |_| \n';

        expect(printLcd.printLcd()).toEqual(expectText);
    });
});

