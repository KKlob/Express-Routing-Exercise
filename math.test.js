const { getMean, getMedian, getMode } = require('./math');

describe("Test math functions", function () {
    let nums;
    beforeEach(function () {
        nums = [2, 6, 8, 2, 4, 10];
    });

    test("Get mean of nums", function () {
        let result = getMean(nums);
        expect(result).toEqual(5.333333333333333)
    });

    test("Get median of nums", function () {
        let result = getMedian(nums);
        expect(result).toEqual(5);
    });

    test("Get mode of nums", function () {
        let result = getMode(nums);
        expect(result).toEqual(2);
    })

})