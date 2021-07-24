const divElement = document.querySelector('#main');

divElement.innerHTML = "We have words here!";

// const selectButton = document.getElementById('main-btn');

const selectButton = document.querySelector('#main-btn');

console.log(selectButton);

function likesFood (food) {
    return `I really like ${food}!!`
};

function hatesFood (food) {
    return `I really hate ${food}!!`
};

function foodOpinion (food, cb) {
    return cb(food)
};

console.log (foodOpinion("blueberries", likesFood));

console.log (foodOpinion("spaghetti", hatesFood));