const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function () {
    //narmal case
    it('Number entered.', function () {
        const normalCases = [
            {num : 1, expected : 1},
            {num : 0.5, expected : 0.5},
            {num : 1.1, expected : 1.1},
        ];

        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected)
        });
    });

    //edge case
    it('Not a number detected.', function () {
        const badInputs = [
            ['$'],
            ['L']
        ];
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input[0]);
            }).to.throw(Error);
        });
    });
});