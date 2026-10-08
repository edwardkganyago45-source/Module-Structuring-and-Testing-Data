import {formatAs12HourClock} from "./timeConverter.js";
import assert from "node:assert";
import test from "node:test";

test("converts midnight correctly", function() {
    assert.equal(formatAs12HourClock("00:00"), "12:00 am");
});

test("converts early morning times correctly", function() {
    assert.equal(formatAs12HourClock("01:00"), "01:00 am");
    assert.equal(formatAs12HourClock("08:00"), "08:00 am");
    assert.equal(formatAs12HourClock("11:59"), "11:59 am");
});

test("converts noon correctly", function() {
    assert.equal(formatAs12HourClock("12:00"), "12:00 pm");
    assert.equal(formatAs12HourClock("12:30"), "12:30 pm");
});

test("converts afternoon and evening times correctly", function() {
    assert.equal(formatAs12HourClock("13:00"), "01:00 pm");
    assert.equal(formatAs12HourClock("18:45"), "06:45 pm");
    assert.equal(formatAs12HourClock("23:00"), "11:00 pm");
});


