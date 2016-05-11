var lcdNum = require('./../main/buildLcdNumer.js');

describe('buildLcdNumber', function () {

    it('should print correct lcdNumbers', function () {
        var lcdNumbers = lcdNum.buildLcdNumber();

        var expectNumber = [
            {
                number: 9,
                type: ['._.',
                    '|_|',
                    '..|']
            },
            {
                number: 1,
                type: ['...',
                    '..|',
                    '..|']
            },
            {
                number: 0,
                type: ['._.',
                    '|.|',
                    '|_|']
            }
        ];

        expect(expectNumber).toEqual(lcdNumbers);
    });
});
