var nums = require('./../main/splitNumber.js');

describe('splitNumber', function () {

    it('should print correct number', function () {
        var numbers = nums.splitNumber();

        var expectNumber = ['9', '1', '0'];
        expect(numbers).toEqual(expectNumber);
    });
});


