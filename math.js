// Functions Section

function checkNums(numsArray) {
    // validate all items in the array are Numbers
    for (num of numsArray) {
        if (isNaN(num)) {
            throw new ExpressError(`${num} is not a number`, 400);
        } else if (num == "") {
            throw new ExpressError(`Empty values are not allowed!`, 400);
        }
    }
    console.log("Checked Nums");
    return true;
}

function getMean(numsArray) {
    // before operations, validate numsArray are all numbers
    if (checkNums(numsArray)) {
        // calculate mean
        let denom = numsArray.length;
        let sum = 0;
        for (num of numsArray) {
            sum += Number(num);
        }
        return parseFloat(sum / denom);
    }
}

function getMedian(numsArray) {
    // before opss, validate numsArray
    if (checkNums(numsArray)) {
        numsArray.sort(function (a, b) { return a - b });
        if (numsArray.length % 2 === 0) {
            let top = numsArray.length / 2
            let bot = top - 1;
            return parseFloat((numsArray[top] + numsArray[bot]) / 2);
        } else {
            let middle = Math.floor(numsArray.length / 2);
            return numsArray[middle];
        }
    }
}

function getMode(numsArray) {
    // before ops, validate numsArray
    if (checkNums(numsArray)) {
        let counts = {};
        // count each instance of num, let counts keep track
        numsArray.forEach(num => {
            if (counts[num] === undefined) {
                counts[num] = 0;
            }
            counts[num] += 1;
        });
        console.log("counts: ", counts);
        // determine the highest count
        let highCount = 0;
        for (num of Object.values(counts)) {
            if (highCount < num) {
                highCount = num;
            }
        }
        console.log("highcount: ", highCount);
        // for each key,value pair with highCount, add to string.
        let mode = [];
        for (const [num, count] of Object.entries(counts)) {
            if (count == highCount) {
                mode.push(Number(num))
            }
        }
        if (mode.length == 1) {
            return mode[0];
        } else {
            return mode.join(",");
        }
    }
}

module.exports = { getMean, getMedian, getMode }