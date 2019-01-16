const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    //narmal case
    it('Please enter a number', function () {
        const normalCases = [
            {num : 1},
            {num : 0.5},
            {num : 1.1},
            {num : 0.05},
            {num : 2}
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(num);
            expect(answer).to.equal(input.num)
        });
    });

    //

})