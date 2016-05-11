/**
 * Created by yangyue on 16-5-11.
 */
var lcdNum=require('./../main/buildLcdNumer.js');

describe('unitTest', function () {
    describe('buildLcdNumber', function () {
    
        beforeEach(function () {
    
        });
    
        it('should print correct lcdNumbers', function () {
            var lcdNumbers =lcdNum.buildLcdNumber();
    
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
});