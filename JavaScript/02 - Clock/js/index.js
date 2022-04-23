"use strict";
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function assertIsDefined(val) {
    if (val === undefined || val === null) {
        throw new Error(`Expected 'val' to be defined, but received ${val}`);
    }
}
function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    assertIsDefined(secondHand); // null check
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
    assertIsDefined(minsHand); // null check
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
    assertIsDefined(hourHand); // null check
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setDate();
setInterval(setDate, 1000);
