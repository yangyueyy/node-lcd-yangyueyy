/**
 * Created by yangyue on 16-5-11.
 */
var nums=require('./../main/splitNumber.js');

describe('unitTest', function () {
    describe('splitNumber', function () {

        beforeEach(function () {

        });

        it('should print correct number', function () {
            numbers = nums.splitNumber();

            var expectNumber = ['9', '1', '0'];
            expect(numbers).toEqual(expectNumber);
        });
    });
});

