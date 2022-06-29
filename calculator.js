const express = require('express');
const { getMean, getMedian, getMode } = require('./math');
const ExpressError = require('./expressError');

const app = express();

// Routes Section

app.get('/mean', function (req, res, next) {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(',');
            let mean = getMean(nums);
            return res.json({ response: { operation: "mean", value: mean } });
        } else {
            throw new ExpressError("nums are required", 400);
        }
    } catch (e) {
        next(e)
    }
})

app.get('/median', function (req, res, next) {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(',');
            let median = getMedian(nums);
            return res.json({ response: { operation: "median", value: median } });
        } else {
            throw new ExpressError("nums are required", 400);
        }
    } catch (e) {
        next(e)
    }
})

app.get('/mode', function (req, res, next) {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(',');
            let mode = getMode(nums);
            return res.json({ response: { operation: "mode", value: mode } });
        } else {
            throw new ExpressError("nums are required", 400);
        }
    } catch (e) {
        next(e)
    }
})

app.get('/all', function (req, res, next) {
    try {
        if (req.query.nums) {
            let nums = req.query.nums.split(',');
            let mean = getMean(nums);
            let median = getMedian(nums);
            let mode = getMode(nums);
            return res.json({ response: { operation: "all", mean, median, mode } });
        } else {
            throw new ExpressError("nums are required", 400);
        }
    } catch (e) {
        next(e)
    }
})

// catch all other routes

app.use(function (req, res, next) {
    next(new ExpressError("Page not Found", 404));
})

// Error handlers Section

app.use(function (err, req, res, next) {
    let status = err.status || 500;
    let message = err.message;

    return res.status(status).json({ error: { message, status } });
})

// App is listening on port 3000

app.listen(3000, function () {
    console.log('App on port 3000');
})